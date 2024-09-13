import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import MessageSchema from "@/app/models/MessageSchema";


export const DELETE = async (request) =>{
    try{

        await connect()
        const {id} = await request.json()

        const existingMessages = await MessageSchema.findByIdAndDelete(id);

        

        return new NextResponse(JSON.stringify({ 
            existingMessages
            
         }), { status: 200 }, {msg:"Zpráva odstraněna"});
    }
    catch(err){
        return NextResponse.error(); // Vrátí chybu 500
    }
}