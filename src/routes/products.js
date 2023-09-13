const express = require("express");
const { route } = require("..");
const router = express.Router();

const {addNewProductController} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addProduct", makeExpressCallback(addNewProductController));


module.exports = router;