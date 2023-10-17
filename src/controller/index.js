const {
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC,
    loginUserUC,
    getAllUserUC,
    saveTransactionUC,
    getAllTransactionUC
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
const getAllTransactionControl = require("./transaction/getAllTransactionController");
const getAllUserControl = require("./users/getAllUserController");

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
const getAllUserController = getAllUserControl({getAllUserUC});

// transaction controller execution
const saveTransactionController = saveTransactionControl({
    saveTransactionUC
})
const getAllTransactionController = getAllTransactionControl({
    getAllTransactionUC
})
module.exports = {
    addNewProductController,
    getSpecificProdController,
    getAllProductController,
    addUserController,
    loginUserController,
    saveTransactionController,
    getAllTransactionController,
    getAllUserController
}