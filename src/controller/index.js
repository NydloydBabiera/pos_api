const{
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");
const getAllProductControl = require("./products/getAllProductController");

//user controller directory
const addUserControl = require("./users/addUserController");

//controller execution
const addNewProductController = addNewProductControl({addNewProductUC});
const getSpecificProdController = getSpecificProdControl({getSpecificProductUC});
const getAllProductController = getAllProductControl({getAllProductUC})

//user controller execution
const addUserController = addUserControl({addUserUC});
module.exports = {
    addNewProductController,
    getSpecificProdController,
    getAllProductController,
    addUserController
}