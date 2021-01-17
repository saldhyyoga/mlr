const express = require("express");
const router = express.Router();
const penjualanController = require("../controller/penjualan");
const middleware = require("../middleware");

router.get("/penjualan", middleware.admin, penjualanController.listPenjualan);
router.post("/add-penjualan/", middleware.admin, penjualanController.create);
router.put(
  "/update-penjualan/:id",
  middleware.admin,
  penjualanController.updatePenjualan
);
router.delete(
  "/delete-penjualan/:id",
  middleware.admin,
  penjualanController.deletePenjualan
);

module.exports = router;
