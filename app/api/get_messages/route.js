import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import MessageSchema from "@/app/models/MessageSchema";
import { usedDynamicAPIs } from "next/dist/server/app-render/dynamic-rendering";


export const GET = async () =>{
    try{

        await connect()

        const existingMessages = await MessageSchema.find();

        const messages = existingMessages.map((message)=>({
            author: message.author,
            subject: message.subject,
            message: message.message,
            created: message.createdAt
        }))

        return new NextResponse(JSON.stringify({ 
            messages,     
            
         }), { status: 200 });
    }
    catch(err){
        return NextResponse.error(); // Vrátí chybu 500
    }
}