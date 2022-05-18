const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const db = require('./config/database.js');

app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));
app.use(express.json())


module.exports = router;
// EJERCICIO 1


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

// EJERCICIO 2
// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
app.post("/add_product", (req, res) => {
    let product = { categories_id: req.body.categories_id, name_product: req.body.name_product, price: req.body.price, stock: req.body.stock };
    let sql = "INSERT INTO products SET ?";
    db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});

// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
app.post("/add_categorie", (req, res) => {
    let categorie = { products_id: req.body.products_id, name_categorie: req.body.name_categorie, stock: req.body.stock };
    let sql = "INSERT INTO categories SET ?";
    db.query(sql, categorie, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});
// EJERCICIO 3
// Crea un endpoint para actualizar un producto. 
app.put('/products/:id', (req, res) => {

        let sql = `UPDATE products SET categories_id='${req.body.categories_id}',name_product = '${req.body.name_product}', price='${req.body.price}', stock='${req.body.stock}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Post updated...')
        })
    })
    // Crea un endpoint para actualizar una categoría.
app.put('/categories/:id', (req, res) => {

    let sql = `UPDATE categories SET products_id='${req.body.products_id}',name_categorie = '${req.body.name_categorie}', stock='${req.body.stock}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post updated...')
    })
})

// Ejercicio 4
// Crea un endpoint que muestre todos los productos
app.get('/allproducts', (req, res) => {
        let sql = 'SELECT * FROM products';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint que muestre todas las categorías
app.get('/allcategories', (req, res) => {
        let sql = 'SELECT * FROM categories';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint que muestra todos los productos con sus categorías
app.get('/allproducts_categories', (req, res) => {
        let sql = 'select * from products INNER JOIN categories on products.categories_id = categories.id';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint donde puedas seleccionar un producto por id
app.get('/products/:id', (req, res) => {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint que muestre de forma descendente los productos.
app.get('/allproducts_desc', (req, res) => {
        let sql = 'SELECT * FROM products ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint donde puedas seleccionar una categoría por id
app.get('/categories/:id', (req, res) => {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })
    // Crea un endpoint donde puedas buscar un producto por su nombre
app.get('/products/por_nombre/:nombre', (req, res) => {
    let sql = `SELECT * FROM products WHERE name_product = '${req.params.nombre}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// Crea un endpoint donde puedas eliminar un producto por su id
app.delete('/products_delete/:id', (req, res) => {
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Post deleted')
    })
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});