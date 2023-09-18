const express = require("express");
const { route } = require("..");
const router = express.Router();

const {addNewProductController,getSpecificProdController,getAllProductController} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addProduct", makeExpressCallback(addNewProductController));
router.get("/getSpecificProduct/:id", makeExpressCallback(getSpecificProdController));
router.get("/getAllProduct", makeExpressCallback(getAllProductController))
module.exports = router;