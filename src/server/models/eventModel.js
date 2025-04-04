const mongoose = require('mongoose');

// Definimos el esquema del evento
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },  
  date: { type: Date, required: true },    
  description: { type: String, required: true }, 
  capacity: { type: Number, required: true },   
  reserved: { type: Number, default: 0 },   
  image: { type: String, required: true }, 
}, { timestamps: true });

// Crear el modelo
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
