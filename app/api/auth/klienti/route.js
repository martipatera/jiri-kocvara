import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import RegisterSchema from "@/app/models/RegisterSchema";
import { usedDynamicAPIs } from "next/dist/server/app-render/dynamic-rendering";


export const GET = async () =>{
    try{
        await connect()

        
        const existingUsers = await RegisterSchema.find({role: "klient"});

        const users = existingUsers.map((user)=>({
            name: user.name,
            email: user.email,
            id: user._id
        }))

        return new NextResponse(JSON.stringify({ 
            message: "Nalezeno",
            users
            
            
            
         }), { status: 200 });
    }
    catch(err){

    }
}