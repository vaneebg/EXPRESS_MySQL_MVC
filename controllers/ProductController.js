const db = require("../config/database.js");

const ProductController = {
    createTableProducts(req, res) {
        let sql = 'CREATE TABLE Products(id int auto_increment,categories_id int,name_product VARCHAR(100),price DECIMAL (5,2),stock int,PRIMARY KEY (id))'
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Posts table created...')
        })
    },
    addProduct(req, res) {
        let product = { categories_id: req.body.categories_id, name_product: req.body.name_product, price: req.body.price, stock: req.body.stock };
        let sql = "INSERT INTO products SET ?";
        db.query(sql, product, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Post added...");
        });
    },
    updateProduct(req, res) {
        let sql = `UPDATE products SET categories_id='${req.body.categories_id}',name_product = '${req.body.name_product}', price='${req.body.price}', stock='${req.body.stock}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post updated...')
        })
    },
    getAllProducts(req, res) {
        let sql = 'SELECT * FROM products';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getProductsCategories(req, res) {
        let sql = 'select * from products INNER JOIN categories on products.categories_id = categories.id';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getProductsById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getProductsDesc(req, res) {

        let sql = 'SELECT * FROM products ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getProductsByName(req, res) {
        let sql = `SELECT * FROM products WHERE name_product = '${req.params.nombre}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    deleteProduct(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send('Post deleted')
        })
    }
}
module.exports = ProductController;