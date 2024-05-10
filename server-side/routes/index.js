const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/authentication.js");
const { errorHandler } = require("../middlewares/errorHandler.js");
const AuthController = require("../controllers/AuthController");
const CategoryController = require("../controllers/CategoryController.js");
const ProductController = require("../controllers/ProductController.js");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.use(authentication);
router.get("/categories", CategoryController.getAllCategories);
router.post("/categories", CategoryController.createCategory);
router.get("/products", ProductController.getAllProducts);
router.post("/products", ProductController.createProduct);

router.put("/categories/:id", CategoryController.updateCategory);
router.delete("/categories/:id", CategoryController.deleteCategory);
router.get("/products/:id", ProductController.getProductById);
router.put("/products/:id", ProductController.editProduct);
router.delete("/products/:id", ProductController.deleteProduct);

router.use(errorHandler);

module.exports = router;
