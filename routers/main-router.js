const express = require("express");

const mainController = require("../controllers/main-controller");

const router = express.Router();

router.post("/buyProduct", mainController.buyProduct);


module.exports = router;