const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.post(
    '/register',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Debe ser un correo válido').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    registerUser
);

router.post('/login', loginUser);

router.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

module.exports = router;
