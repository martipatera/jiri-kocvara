// server.js (nebo app.js)
const express = require("express")
const register = express.Router()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const RegisterSchema = require("../models/RegisterSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru



// POST Route pro registraci
register.post("/register/", async (req, res) => {
  try {
    const { name, email, password, registerCode, role } = req.body;

    // Kontrola, zda uživatel již existuje
    const existingUser = await RegisterSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Uživatel již existuje" });
    }

    // Vytvoření nové instance uživatele
    const newUser = new RegisterSchema({ name, email, password, registerCode, role });

    // Uložení uživatele do databáze
    await newUser.save();

    // Úspěšná odpověď
    return res.status(201).json({ message: "Registrace proběhla úspěšně" });
  } catch (err) {
    console.error("Chyba při registraci:", err);
    return res.status(500).json({ message: "Registrace selhala" });
  }
});

// Server



module.exports = register