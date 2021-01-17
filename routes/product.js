const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
const middleware = require("../middleware");

router.get("/products", middleware.admin, productController.listProducts);
router.post("/add-product", middleware.admin, productController.addProduct);
router.delete(
  "/delete-product/:id",
  middleware.admin,
  productController.deleteProduct
);
router.put(
  "/update-product/:id",
  middleware.admin,
  productController.updateProduct
);

module.exports = router;
