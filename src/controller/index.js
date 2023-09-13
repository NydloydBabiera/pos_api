const{
    addNewProductUC
} = require("../use-cases")

//product controller directory
const addNewProductControl = require("./products/addProductController");

//controller execution
const addNewProductController = addNewProductControl({addNewProductUC});

module.exports = {
    addNewProductController
}