const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");
const penjualan = require("./penjualan");
const regression = require("./regression");

router.use(user);
router.use(product);
router.use(penjualan);
router.use(regression);

module.exports = router;
