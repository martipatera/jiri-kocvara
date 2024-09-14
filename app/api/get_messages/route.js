import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import MessageSchema from "@/app/models/MessageSchema";

export const GET = async () => {
    try {
        await connect();

        const existingMessages = await MessageSchema.find({})

        const messages = existingMessages.map((message) => ({
            author: message.author,
            subject: message.subject,
            message: message.message,
            created: message.createdAt,
            id: message._id
        }));

        const response = new NextResponse(JSON.stringify({ messages }), { status: 200 });

        // Zakázání cache v hlavičkách
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        response.headers.set("Expires", "0");
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Surrogate-Control", "no-store");

        return response;
    } catch (err) {
        return NextResponse.error(); // Vrátí chybu 500
    }
};
