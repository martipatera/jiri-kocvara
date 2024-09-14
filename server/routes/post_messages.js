// server.js (nebo app.js)
const express = require("express")
const post_messages = express.Router()
const mongoose = require("mongoose");
const MessageSchema = require("../models/MessageSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pro parsování JSONu


// POST Route pro přidání nové zprávy
post_messages.post("/post_messages/", async (req, res) => {
  try {
    const { author, email, subject, message } = req.body;

    // Vytvoření nové instance zprávy
    const newMessage = new MessageSchema({
      author,
      email,
      subject,
      message,
    });

    // Uložení zprávy do databáze
    await newMessage.save();

    // Odpověď s potvrzením úspěchu
    return res.status(201).json({
      message: "Odeslání proběhlo úspěšně",
    });
  } catch (err) {
    console.error("Odeslání selhalo:", err);

    // Odpověď s chybou
    return res.status(500).json({
      message: "Odeslání selhalo",
    });
  }
});

// Server



module.exports = post_messages