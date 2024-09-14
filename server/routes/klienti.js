// server.js (nebo app.js)
const express = require("express")
const klienti = express.Router()
const mongoose = require("mongoose");
const RegisterSchema = require("../models/RegisterSchema"); // Ujisti se, že máš správnou cestu k modelu
require("dotenv").config(); // Pro načtení proměnných z .env souboru



// GET Route pro načtení uživatelů
klienti.get("/klienti/", async (req, res) => {
  try {

    // Nalezení všech uživatelů s rolí "klient"
    const existingUsers = await RegisterSchema.find({ role: "klient" });

    // Mapování výsledků do pole objektů s požadovanými hodnotami
    const users = existingUsers.map((user) => ({
      name: user.name,
      email: user.email,
      id: user._id,
    }));

    // Zakázání cache pomocí hlaviček
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Expires", "0");
    res.set("Pragma", "no-cache");
    res.set("Surrogate-Control", "no-store");

    // Odpověď s nalezenými uživateli
    res.status(200).json({
      message: "Nalezeno",
      users,
    });
  } catch (err) {
    console.error("Chyba při získávání uživatelů:", err);
    res.status(500).json({ message: "Chyba při získávání uživatelů" });
  }
});

// Server


module.exports = klienti