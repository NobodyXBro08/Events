require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); 
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); 

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
