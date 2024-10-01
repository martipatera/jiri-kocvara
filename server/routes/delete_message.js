// server.js (nebo app.js)
const express = require("express")
const delete_message = express.Router()
const mongoose = require("mongoose");
const MessageSchema = require("../models/MessageSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru



// DELETE Route pro smazání zprávy podle ID
delete_message.delete("/delete_message/", async (req, res) => {
  try {
    const { id } = req.body; // Získání ID z těla požadavku

    // Zkontrolujte, zda ID je platn0
    if (!id) {
      return res.status(400).json({ msg: "ID je povinné" });
    }

    const existingMessage = await MessageSchema.findByIdAndDelete(id);

    if (!existingMessage) {
      return res.status(404).json({ msg: "Zpráva nebyla nalezena" });
    }

    return res.status(200).json({ msg: "Zpráva byla úspěšně smazána" });
  } catch (err) {
    console.error("Chyba při mazání zprávy:", err);
    return res.status(500).json({ msg: "Chyba při mazání zprávy" });
  }
});

// Server


module.exports = delete_message