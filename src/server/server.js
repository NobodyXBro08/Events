require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Función para conectar a MongoDB con manejo de errores
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
    });
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());
