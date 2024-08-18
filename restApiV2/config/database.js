/*const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost/3000',
  user: 'dbuser',
  password: 'my-secret-pw',
  database: 'mydatabase'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
  console.error('Veritabanı bağlantısında hata:', err.message);

  console.log('The solution is: ', rows[0].solution)
})
connection.end();

module.exports = connection;
*/
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mydatabase', 'dbuser', 'my-secret-pw', {
    host: 'localhost:3306',
    dialect: 'mysql',
    logging: false, 
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL bağlantısı başarılı.');
    } catch (error) {
        console.error('Veritabanı bağlantısında hata:', error.message);
    }
})();

module.exports = sequelize;