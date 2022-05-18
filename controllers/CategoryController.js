const db = require("../config/database.js");

const PostController = {
    createTableCategories(req, res) {
        let sql = 'CREATE TABLE Categories(id INT auto_increment, products_id INT,name_categorie VARCHAR(45),stock int,PRIMARY KEY (id), FOREIGN KEY (products_id) REFERENCES products(id))'

        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Posts table created...')
        })
    },
    addCategorie(req, res) {
        let categorie = { products_id: req.body.products_id, name_categorie: req.body.name_categorie, stock: req.body.stock };
        let sql = "INSERT INTO categories SET ?";
        db.query(sql, categorie, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Post added...");
        });
    },
    updateCategory(req, res) {
        let sql = `UPDATE categories SET products_id='${req.body.products_id}',name_categorie = '${req.body.name_categorie}', stock='${req.body.stock}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post updated...')
        })
    },
    getAllCategories(req, res) {
        let sql = 'SELECT * FROM categories';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getCategoriesById(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
}

module.exports = PostController;