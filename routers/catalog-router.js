const express = require("express");

const catalogController = require("../controllers/catalog-controller");

const router = express.Router();

router.get("/:id", catalogController.getCatalog);


module.exports = router;