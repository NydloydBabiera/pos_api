const productDataAccess = require("../data-access/products");
const userDataAccess = require("../data-access/users");
const transDataAccess = require("../data-access/transactions")

//products use-case directory
const addNewProduct = require("./products/addProductUC");
const getSpecifictProduct = require("./products/getSpecificProdUC");
const getAllProduct = require("./products/getAllProductUC");

//user use-case directory
const addUser = require("./users/addUserUC");
const loginUser = require("./users/loginUserUC");

// transaction use-case directory
const saveTransaciton = require("./transactions/saveTransactionUC");
const getAllTransaction = require("./transactions/getAllTransactionUC");
const getAllUser = require("./users/getAllUsersUC");

//products use-case execution
const addNewProductUC = addNewProduct({
    productDataAccess
});
const getSpecificProductUC = getSpecifictProduct({
    productDataAccess
});
const getAllProductUC = getAllProduct({
    productDataAccess
});

//product use-case execution
const addUserUC = addUser({
    userDataAccess
});
const loginUserUC = loginUser({
    userDataAccess
});

// transaction use-case execution
const saveTransactionUC = saveTransaciton({
    transDataAccess
})
const getAllTransactionUC = getAllTransaction({
    transDataAccess
})

const getAllUserUC = getAllUser({userDataAccess});
module.exports = {
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC,
    loginUserUC,
    saveTransactionUC,
    getAllTransactionUC,
    getAllUserUC
}