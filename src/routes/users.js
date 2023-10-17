const express = require("express");
const { route } = require("..");
const router = express.Router();

const {addUserController, loginUserController,getAllUserController} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addUser", makeExpressCallback(addUserController));
router.post("/loginUser",makeExpressCallback(loginUserController));
router.get("/getAllUsers",makeExpressCallback(getAllUserController));

module.exports = router;