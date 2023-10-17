const{
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC,
    loginUserUC,
    getAllUserUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");
const getAllProductControl = require("./products/getAllProductController");

//user controller directory
const addUserControl = require("./users/addUserController");
const loginUserControl = require("./users/loginUserController");
const getAllUserControl = require("./users/getAllUserController");

//controller execution
const addNewProductController = addNewProductControl({addNewProductUC});
const getSpecificProdController = getSpecificProdControl({getSpecificProductUC});
const getAllProductController = getAllProductControl({getAllProductUC})

//user controller execution
const addUserController = addUserControl({addUserUC});
const loginUserController = loginUserControl({loginUserUC});
const getAllUserController = getAllUserControl({getAllUserUC});

module.exports = {
    addNewProductController,
    getSpecificProdController,
    getAllProductController,
    addUserController,
    loginUserController,
    getAllUserController
}