import { NextResponse } from 'next/server';

export function middleware(req) {
    const response = NextResponse.next();

    // Nastavení CORS hlaviček
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set(
        'Access-Control-Allow-Origin',
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://tvadomena.vercel.app'
    );
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Zpracování OPTIONS požadavku
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: response.headers,
        });
    }

    return response;
}

// Nastavení cesty, na které bude middleware aplikován (například na API routy)
export const config = {
    matcher: '/api/:path*',
};
