const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    saveTransactionController
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/saveTransaction", makeExpressCallback(saveTransactionController));

module.exports = router;