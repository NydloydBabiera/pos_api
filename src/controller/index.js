const{
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");
const getAllProductControl = require("./products/getAllProductController");

//controller execution
const addNewProductController = addNewProductControl({addNewProductUC});
const getSpecificProdController = getSpecificProdControl({getSpecificProductUC});
const getAllProductController = getAllProductControl({getAllProductUC})

module.exports = {
    addNewProductController,
    getSpecificProdController,
    getAllProductController
}