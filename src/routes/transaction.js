const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    saveTransactionController,
    getAllTransactionController
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/saveTransaction", makeExpressCallback(saveTransactionController));
router.get("/getAllTransaction", makeExpressCallback(getAllTransactionController));


module.exports = router;