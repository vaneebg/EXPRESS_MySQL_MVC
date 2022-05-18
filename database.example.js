const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tucontra',
    database: 'store'
});
db.connect();
module.exports = db;