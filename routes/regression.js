const { response } = require("express");
const express = require("express");
const router = express.Router();
const regression = require("../controller/regression");
const middleware = require("../middleware");

router.post("/regression", middleware.admin, regression.read);

module.exports = router;
