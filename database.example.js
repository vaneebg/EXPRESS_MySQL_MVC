const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vbg12345',
    database: 'store'
});
db.connect();
module.exports = db;