const productDataAccess = require("../data-access/products");

//products use-case directory
const addNewProduct = require("./products/addProductUC");
const getSpecifictProduct = require("./products/getSpecificProdUC");

//products use-case execution
const addNewProductUC = addNewProduct({productDataAccess});
const getSpecificProductUC = getSpecifictProduct({productDataAccess});

module.exports = {
    addNewProductUC,
    getSpecificProductUC
}