
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
















/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

// app.js

/*const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const SECRET_KEY = 'your-secret-key'; // Bu gizli anahtarı güvenli bir yerde saklayın

console.log(SECRET_KEY);
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Kullanıcı kimlik doğrulaması (örneğin, veritabanı kontrolü)
    if (username === 'user' && password === 'password') {
        // Payload içinde kullanıcı bilgilerini saklıyoruz
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });

        console.log(token);
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

// JWT doğrulama middleware'i
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

      console.log(token);

    if (!token) {
        return res.sendStatus(401); // Token yoksa yetkisiz hata döner
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Token geçersizse yasak hatası döner
        }

        req.user = user; // Doğrulanan kullanıcıyı request objesine ekliyoruz
        next(); // Bir sonraki middleware veya route'a geçiş yapar
    });
}

// Korunan bir rota
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you have access to this protected route!` });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/
