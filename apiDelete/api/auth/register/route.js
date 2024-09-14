// app/api/auth/route.js
import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import RegisterSchema from "@/app/models/RegisterSchema";

export const POST = async (request) => {
    try {
        // Připojení k databázi
        await connect();

        // Získání dat z požadavku
        const data = await request.json();

        const { name, email, password, registerCode, role } = data;

        // Kontrola, zda uživatel již existuje
        const existingUser = await RegisterSchema.findOne({ email });
        
        if (existingUser) {
            return new NextResponse(JSON.stringify({ message: "Uživatel již existuje" }), { status: 400 });
        }

        // Pokud uživatel neexistuje, vytvoření nové instance modelu
        const newUser = new RegisterSchema({ name, email, password, registerCode, role });
        // Uložení dat do databáze
        await newUser.save();

        // Odpověď s potvrzením úspěchu
        return new NextResponse(JSON.stringify({ message: "Registrace proběhla úspěšně" }), { status: 201 });
    } catch (err) {
        console.error("Error in registration:", err);

        // Odpověď s chybovou hláškou
        return new NextResponse(JSON.stringify({ message: "Registrace selhala" }), { status: 500 });
    }
};
