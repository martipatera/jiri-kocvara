import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import RegisterSchema from "@/app/models/RegisterSchema";


export const GET = async () =>{
    try{
        await connect()
        // Kontrola, zda uživatel existuje
        const existingUsers = await RegisterSchema.find();

        const emails = existingUsers.map((user)=>user.email)

        return new NextResponse(JSON.stringify({ 
            message: "Nalezeno",
            emails
            
         }), { status: 200 });
    }
    catch(err){

    }
}