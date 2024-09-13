import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import RegisterSchema from "@/app/models/RegisterSchema";



export const POST = async (request) => {


    
    try {
        // Připojení k databázi
        await connect();

        // Získání dat z požadavku
        const data = await request.json();
        const { email, password } = data;

        // Kontrola, zda uživatel existuje
        const existingUser = await RegisterSchema.findOne({ email });

        if (!existingUser) {
            return new NextResponse(JSON.stringify({ message: "Uživatel nenalezen",},), { status: 404 });
        }
        existingUser.password = password //tady se meni heslo
        await existingUser.save();
        return new NextResponse(JSON.stringify({ message: "Uživatel nalezen, heslo bylo úspěšně změněno změněno"}), { status: 200 });
        
    }
    catch (err) {
    
            // Odpověď s chybovou hláškou
            return new NextResponse(JSON.stringify({ message: "Něco selhalo, zkuste později" }), { status: 500 });
    }
}