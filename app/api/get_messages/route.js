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
            id: message._id.toString() // Ujisti se, že ID je ve správném formátu
        }));

        const response = new NextResponse(JSON.stringify({ messages }), { status: 200 });

        // Zakázání cache v hlavičkách
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
        response.headers.set("Expires", "0");
        response.headers.set("Pragma", "no-cache");

        return response;
    } catch (err) {
        console.error("Error fetching messages:", err); // Loguj chyby pro lepší diagnostiku
        return new NextResponse("Internal Server Error", { status: 500 }); // Vrátí chybu 500 s textem
    }
};
