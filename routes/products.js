const express = require('express');
const ProductController = require('../controllers/ProductController.js');
const router = express.Router();
router.get('/createtable_products', ProductController.createTableProducts)
router.post("/add_product", ProductController.addProduct)
router.put("/:id", ProductController.updateProduct)
router.get("/allproducts", ProductController.getAllProducts)
router.get("/allproducts_categories", ProductController.getProductsCategories)
router.get("/allproducts_desc", ProductController.getProductsDesc)
router.get("/por_nombre/:nombre", ProductController.getProductsByName)
router.get("/:id", ProductController.getProductsById)
router.delete("/products_delete/:id", ProductController.deleteProduct)

// estas rutas ya llevan el products al principio, que es la ruta que tienes en index. products/add_product etc. Cuando coja parametros, ponerlo al final la ruta

module.exports = router;