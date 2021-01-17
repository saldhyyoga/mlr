const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const dashboardController = require("../controller/dashboard");
const middleware = require("../middleware");

router.post("/users/sign-in", userController.signin);
router.post("/users/sign-up", userController.signup);

router.get(
  "/detail/dashboard",
  middleware.admin,
  dashboardController.detailDashboard
);
module.exports = router;
