const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    reserved: { type: Number, default: 0 },
}, { timestamps: true }); // Agrega createdAt y updatedAt automáticamente

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
