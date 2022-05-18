const express = require('express');
const PostController = require('../controllers/ProductController.js');
const router = express.Router();
router.get('/createtable_products', PostController.createTableProducts)
router.post("/add_product", PostController.addProduct)
router.put("/products/:id", PostController.updateProduct)
route.get("/allproducts", PostController.getAllProducts)
router.get("/allproducts_categories", PostController.getProductsCategories)
router.get("/products/:id", PostController.getProductsById)
router.get("/allproducts_desc", PostController.getProductsDesc)
router.get("/products/por_nombre/:nombre", PostController.getProductsByName)
router.delete("/products_delete/:id", PostController.deleteProduct)



module.exports = router;