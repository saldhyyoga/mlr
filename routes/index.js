const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");
const penjualan = require("./penjualan");
const regression = require("./regression");
const prediksi = require("./prediksi");

router.use(user);
router.use(product);
router.use(penjualan);
router.use(regression);
router.use(prediksi);

module.exports = router;
