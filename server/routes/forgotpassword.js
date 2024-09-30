// server.js (nebo app.js)
const express = require("express")
const forgotpassword = express.Router()
const mongoose = require("mongoose");
const RegisterSchema = require("../models/RegisterSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru




// POST Route pro změnu hesla uživatele
forgotpassword.post("/forgotpassword/", async (req, res) => {
  try {

    // Získání dat z požadavku
    const { email, password } = req.body;

    // Kontrola, zda uživatel existuje
    const existingUser = await RegisterSchema.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "Uživatel nenalezen" });
    }

    // Změna hesla
    existingUser.password = password;
    await existingUser.save();

    return res.status(200).json({ message: "Heslo bylo úspěšně změněno" });
  } catch (err) {
    console.error("Chyba při změně hesla:", err);
    return res.status(500).json({ message: "Něco selhalo, zkuste později" });
  }
});


module.exports = forgotpassword