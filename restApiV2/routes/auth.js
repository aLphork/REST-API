const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

const SECRET_KEY = 'supersecretkey';

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ username: username, password: hashedPassword });
        const tokenRegister = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({user: user, token: tokenRegister});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) return res.status(400).json({ error: 'Kullanıcı bulunamadı' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ error: 'Geçersiz şifre' });

    const tokenlogin = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token: tokenlogin });
});

module.exports = router;