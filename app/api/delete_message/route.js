import { NextResponse } from "next/server";
import connect from "@/app/database/db";
import MessageSchema from "@/app/models/MessageSchema";

export const DELETE = async (request) => {
  try {
    await connect();
    
    const { id } = await request.json(); // Získání ID z těla požadavku

    // Zkontrolujte, zda ID je platné
    if (!id) {
      return new NextResponse(
        JSON.stringify({ msg: 'ID is required' }),
        { status: 400 }
      );
    }

    const existingMessage = await MessageSchema.findByIdAndDelete(id);

    if (!existingMessage) {
      return new NextResponse(
        JSON.stringify({ msg: 'Message not found' }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ msg: 'Message deleted successfully' }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error deleting message:', err);
    return new NextResponse(
      JSON.stringify({ msg: 'Error deleting message' }),
      { status: 500 }
    );
  }
};
