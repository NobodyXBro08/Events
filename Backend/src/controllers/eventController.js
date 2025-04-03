const Event = require('../models/event');

const createEvent = async (req, res) => {
    try {
        const { title, date, capacity } = req.body;
        const newEvent = new Event({ title, date, capacity });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el evento' });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener eventos' });
    }
};

const reserveEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }

        if (event.reserved >= event.capacity) {
            return res.status(400).json({ message: 'Evento lleno' });
        }

        event.reserved += 1;
        await event.save();
        res.status(200).json({ message: 'Reserva realizada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la reserva' });
    }
};

module.exports = { createEvent, getEvents, reserveEvent };
