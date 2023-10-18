const {
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC,
    loginUserUC,
    saveTransactionUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");
const getAllProductControl = require("./products/getAllProductController");

//user controller directory
const addUserControl = require("./users/addUserController");
const loginUserControl = require("./users/loginUserController");

// transaction controller directory
const saveTransactionControl = require("./transaction/saveTransactionController");


//controller execution
const addNewProductController = addNewProductControl({
    addNewProductUC
});
const getSpecificProdController = getSpecificProdControl({
    getSpecificProductUC
});
const getAllProductController = getAllProductControl({
    getAllProductUC
})

//user controller execution
const addUserController = addUserControl({
    addUserUC
});
const loginUserController = loginUserControl({
    loginUserUC
});

// transaction controller execution
const saveTransactionController = saveTransactionControl({
    saveTransactionUC
})
module.exports = {
    addNewProductController,
    getSpecificProdController,
    getAllProductController,
    addUserController,
    loginUserController,
    saveTransactionController
}