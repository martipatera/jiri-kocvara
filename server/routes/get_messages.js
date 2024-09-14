// server.js (nebo app.js)
const express = require("express")
const get_messages = express.Router()
const mongoose = require("mongoose");
const MessageSchema = require("../models/MessageSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru




// GET Route pro získání všech zpráv
get_messages.get("/get_messages/", async (req, res) => {
  try {
    console.log("GET request received");

    console.log("Fetching messages...");
    const existingMessages = await MessageSchema.find({});
    console.log("Messages fetched:", existingMessages);

    const messages = existingMessages.map((message) => ({
      author: message.author,
      subject: message.subject,
      message: message.message,
      created: message.createdAt,
      id: message._id,
    }));

    // Zakázání cache v hlavičkách
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Expires", "0");
    res.set("Pragma", "no-cache");
    res.set("Surrogate-Control", "no-store");

    // Odpověď s nalezenými zprávami
    return res.status(200).json({ messages });
  } catch (err) {
    console.error("Error in GET:", err);
    return res.status(500).json({ msg: "Error in GET request" });
  }
});

// Server

module.exports = get_messages