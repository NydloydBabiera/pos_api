const productDataAccess = require("../data-access/products");
const userDataAccess = require("../data-access/users");

//products use-case directory
const addNewProduct = require("./products/addProductUC");
const getSpecifictProduct = require("./products/getSpecificProdUC");
const getAllProduct = require("./products/getAllProductUC");

//user use-case directory
const addUser = require("./users/addUserUC");

//products use-case execution
const addNewProductUC = addNewProduct({productDataAccess});
const getSpecificProductUC = getSpecifictProduct({productDataAccess});
const getAllProductUC = getAllProduct({productDataAccess});

//product use-case execution
const addUserUC = addUser({userDataAccess});
module.exports = {
    addNewProductUC,
    getSpecificProductUC,
    getAllProductUC,
    addUserUC
}