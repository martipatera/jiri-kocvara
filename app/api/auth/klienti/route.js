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

        const response = NextResponse(JSON.stringify({ 
            message: "Nalezeno",
            users
            
            
            
         }), { status: 200 })

        // Zakázání cache v hlavičkách
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        response.headers.set("Expires", "0");
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Surrogate-Control", "no-store");;

        
    }
    catch(err){
        return NextResponse.error(); // Vrátí chybu 500


    }
}