// server.js (nebo app.js)
const express = require("express")
const login = express.Router()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const RegisterSchema = require("../models/RegisterSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru



// POST Route pro přihlášení
login.post("/login/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kontrola, zda uživatel existuje
    const existingUser = await RegisterSchema.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "Uživatel nenalezen" });
    }

    // Ověření hesla pomocí bcrypt
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Nesprávné heslo" });
    }

    // Úspěšná odpověď s údaji o uživateli
    return res.status(200).json({
      message: "Přihlášení bylo úspěšné",
      user: {
        role: existingUser.role,
      },
    });
  } catch (err) {
    console.error("Chyba při přihlášení:", err);
    return res.status(500).json({ message: "Přihlášení selhalo" });
  }
});

// Server


module.exports = login