const jwt = require('jsonwebtoken');
const User = require('../../client/api/user'); 

const authMiddleware = async (req, res, next) => {
    let token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
    }

    try {
        // Manejar si el token viene en formato Bearer
        if (token.startsWith('Bearer ')) {
            token = token.split(' ')[1];
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado.' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado', error: error.message });
    }
};

module.exports = authMiddleware;
