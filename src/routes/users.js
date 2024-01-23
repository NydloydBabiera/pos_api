const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    addUserController,
    loginUserController,
    getAllUserController,
    updatePasswordController,
    deleteUserController
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addUser", makeExpressCallback(addUserController));
router.post("/loginUser", makeExpressCallback(loginUserController));
router.get("/getAllUsers", makeExpressCallback(getAllUserController));
router.put("/updatePassword", makeExpressCallback(updatePasswordController))
router.delete("/deleteUser/:id", makeExpressCallback(deleteUserController))
module.exports = router;