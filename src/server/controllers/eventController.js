const Event = require('../../client/api/event');

const createEvent = async (req, res) => {
    try {
        const { title, date, capacity, image } = req.body;

        if (!title || !date || !capacity || !image) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const newEvent = new Event({ title, date, capacity, reserved: 0, image });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el evento', error: error.message });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener eventos', error: error.message });
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
        res.status(200).json({ message: 'Reserva realizada con éxito', event });
    } catch (error) {
        res.status(500).json({ message: 'Error en la reserva', error: error.message });
    }
};

module.exports = { createEvent, getEvents, reserveEvent };
