require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI no está definido en el archivo .env");
  process.exit(1);
}

// Función para conectar a MongoDB con manejo de errores
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error.message);
    process.exit(1);
  }
};

// Conectar a la base de datos
connectDB();

// Middleware básico
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando correctamente");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});