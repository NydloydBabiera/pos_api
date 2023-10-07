const express = require("express");
const { route } = require("..");
const router = express.Router();

const {addUserController, loginUserController} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addUser", makeExpressCallback(addUserController));
router.post("/loginUser",makeExpressCallback(loginUserController));

module.exports = router;