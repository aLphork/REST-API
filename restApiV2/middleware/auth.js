const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey';

const authenticateToken = (req, res, next) => {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    const authHeader = req.headers['authorization'];
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        next();
    });
};

module.exports = authenticateToken;