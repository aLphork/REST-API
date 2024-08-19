
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
app.use(express.json()); //gelen objeye dnüştürmek için middleware oluşturur

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

sequelize.sync().then(() => {    //senkronizasyon sağlar, başarılı olursa consola aşşağıdakilerin 
    console.log('Veritabanı senkronize edildi');    //yazılması için kullanılır, promiselardan gelir
    app.listen(3000, () => {
        console.log('Sunucu 3000 portunda çalışıyor');
    });
});