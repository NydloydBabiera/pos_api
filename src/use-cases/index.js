const productDataAccess = require("../data-access/products");

//products use-case directory
const addNewProduct = require("./products/addProductUC");

//products use-case execution
const addNewProductUC = addNewProduct({productDataAccess});

module.exports = {
    addNewProductUC
}