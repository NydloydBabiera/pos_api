const productDataAccess = require("../data-access/products");

//products use-case directory
const addNewProduct = require("./products/addProductUC");
const getSpecifictProduct = require("./products/getSpecificProdUC");
const getAllProduct = require("./products/getAllProductUC");

//products use-case execution
const addNewProductUC = addNewProduct({productDataAccess});
const getSpecificProductUC = getSpecifictProduct({productDataAccess});
const getAllProductUC = getAllProduct({productDataAccess});

module.exports = {
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC
}