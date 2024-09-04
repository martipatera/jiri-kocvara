// app/api/auth/route.js
import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import MessageSchema from "@/app/models/MessageSchema";

export const POST = async (request) => {
    try {
        // Připojení k databázi
        await connect();

        // Získání dat z požadavku
        const data = await request.json();
        const { author, subject, message } = data;


        // Pokud uživatel neexistuje, vytvoření nové instance modelu
        const messages = new MessageSchema({ author, subject, message });

        // Uložení dat do databáze
        await messages.save();

        // Odpověď s potvrzením úspěchu
        return new NextResponse(JSON.stringify({ 
            message: "Odeslání proběhlo úspěšně",
            

         }, ), { status: 201 });
    } catch (err) {
        console.error("Odeslání selhalo: ", err);

        // Odpověď s chybovou hláškou
        return new NextResponse(JSON.stringify({ message: "Odeslání selhalo" }), { status: 500 });
    }
};
