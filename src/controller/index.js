const{
    addNewProductUC,
    getSpecificProductUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");

//controller execution
const addNewProductController = addNewProductControl({addNewProductUC});
const getSpecificProdController = getSpecificProdControl({getSpecificProductUC});

module.exports = {
    addNewProductController,
    getSpecificProdController
}