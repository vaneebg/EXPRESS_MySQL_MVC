const express = require("express");
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.use(express.json())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vbg12345',
    database: 'store'
});
db.connect();

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE store';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})

app.get('/createtable_products', (req, res) => {
    let sql = 'CREATE TABLE Products(id int auto_increment,categories_id int,name_product VARCHAR(100),price DECIMAL (5,2),stock int,PRIMARY KEY (id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})

app.get('/createtable_categories', (req, res) => {
    let sql = 'CREATE TABLE Categories(id INT auto_increment, products_id INT,name_categorie VARCHAR(45),stock int,PRIMARY KEY (id), FOREIGN KEY (products_id) REFERENCES products(id))'

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});