const express = require('express');
const PostController = require('../controllers/CategoryController.js');
const router = express.Router();
router.get('/createtable_categories', PostController.createTableCategories)
router.post("/add_categorie", PostController.addCategorie)
router.put("/categories/:id", PostController.updateCategory)
route.get("/allcategories", PostController.getAllCategories)

router.get("/categories/:id", PostController.getCategoriesById)

module.exports = router;