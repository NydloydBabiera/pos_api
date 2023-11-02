const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    saveTransactionController,
    getAllTransactionController,
    getSpecificTransactionController,
    processTransactionController
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/saveTransaction", makeExpressCallback(saveTransactionController));
router.get("/getAllTransaction", makeExpressCallback(getAllTransactionController));
router.get("/getSpecificTransaction/:id", makeExpressCallback(getSpecificTransactionController))
router.put("/processTransaction", makeExpressCallback(processTransactionController))


module.exports = router;