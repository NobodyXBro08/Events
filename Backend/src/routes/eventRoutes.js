const express = require('express');
const { createEvent, getEvents, reserveEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getEvents);
router.post('/create', authMiddleware, createEvent);
router.post('/reserve/:id', authMiddleware, reserveEvent);

module.exports = router;
