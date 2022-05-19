const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const router = express.Router();
router.get('/createtable_categories', CategoryController.createTableCategories)
router.post("/add_categorie", CategoryController.addCategorie)
router.put("/:id", CategoryController.updateCategory)
router.get("/allcategories", CategoryController.getAllCategories)

router.get("/id/:id", CategoryController.getCategoriesById)

module.exports = router;