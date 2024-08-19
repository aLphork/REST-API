
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

sequelize.sync().then(() => {
    console.log('Veritabanı senkronize edildi');
    app.listen(3000, () => {
        console.log('Sunucu 3000 portunda çalışıyor');
    });
});