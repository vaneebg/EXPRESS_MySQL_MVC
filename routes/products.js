const express = require('express');
const ProductController = require('../controllers/ProductController.js');
const router = express.Router();
router.get('/createtable_products', ProductController.createTableProducts)
router.post("/add_product", ProductController.addProduct)
router.put("/products/:id", ProductController.updateProduct)
router.get("/allproducts", ProductController.getAllProducts)
router.get("/allproducts_categories", ProductController.getProductsCategories)
router.get("/products/:id", ProductController.getProductsById)
router.get("/allproducts_desc", ProductController.getProductsDesc)
router.get("/products/por_nombre/:nombre", ProductController.getProductsByName)
router.delete("/products_delete/:id", ProductController.deleteProduct)



module.exports = router;