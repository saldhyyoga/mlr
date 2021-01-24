const express = require("express");
const router = express.Router();
const prediksiController = require("../controller/prediksi");
const middleware = require("../middleware");

router.get("/prediksi", middleware.admin, prediksiController.read);
router.delete("/prediksi/:id", middleware.admin, prediksiController.delete);
router.get("/prediksi/:id", middleware.admin, prediksiController.detail);
router.get("/year", middleware.admin, prediksiController.getYear);

module.exports = router;
