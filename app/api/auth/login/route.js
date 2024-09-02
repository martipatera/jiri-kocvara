// app/api/auth/route.js
import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import RegisterSchema from "@/app/models/RegisterSchema";
import bcrypt from 'bcrypt';



export const POST = async (request) => {
    try {
        // Připojení k databázi
        await connect();

        // Získání dat z požadavku
        const data = await request.json();
        const { email, password, role } = data;

        // Kontrola, zda uživatel existuje
        const existingUser = await RegisterSchema.findOne({ email });

        if (!existingUser) {
            return new NextResponse(JSON.stringify({ message: "Uživatel nenalezen" }), { status: 404 });
        }

        // Ověření hesla
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (existingUser.password !== password) {
            return new NextResponse(JSON.stringify({ message: "Nesprávné heslo" }), { status: 400 });
        }

        // Odpověď s potvrzenWím úspěchu
        return new NextResponse(JSON.stringify({ message: "Přihlášení bylo úspěšné",
            user:{
                role: existingUser.role
            }
         }), { status: 200 });
    } catch (err) {
        console.error("Error in authentication:", err);

        // Odpověď s chybovou hláškou
        return new NextResponse(JSON.stringify({ message: "Přihlášení selhalo" }), { status: 500 });
    }
};
