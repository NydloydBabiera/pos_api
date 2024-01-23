const {
  addNewProductUC,
  getSpecificProductUC,
  getAllProductUC,
  addUserUC,
  loginUserUC,
  getAllUserUC,
  saveTransactionUC,
  getAllTransactionUC,
  getSpecificTransactionUC,
  processTransactionUC,
  updatePasswordUC,
  deleteUserUC,
} = require("../use-cases");

//product controller directory
const addNewProductControl = require("./products/addProductController");
const getSpecificProdControl = require("./products/getSpecificProductController");
const getAllProductControl = require("./products/getAllProductController");

//user controller directory
const addUserControl = require("./users/addUserController");
const loginUserControl = require("./users/loginUserController");
const getAllUserControl = require("./users/getAllUserController");
const updatePasswordControl = require("./users/updatePasswordController");
const deleteUserControl = require("./users/deleteUserController");
// transaction controller directory
const saveTransactionControl = require("./transaction/saveTransactionController");
const getAllTransactionControl = require("./transaction/getAllTransactionController");
const getSpecificTransactionControl = require("./transaction/getSpecificTransactionController");
const processTransactionControl = require("./transaction/processTransactionController");

//controller execution
const addNewProductController = addNewProductControl({
  addNewProductUC,
});
const getSpecificProdController = getSpecificProdControl({
  getSpecificProductUC,
});
const getAllProductController = getAllProductControl({
  getAllProductUC,
});

//user controller execution
const addUserController = addUserControl({
  addUserUC,
});
const loginUserController = loginUserControl({
  loginUserUC,
});
const getAllUserController = getAllUserControl({
  getAllUserUC,
});
const updatePasswordController = updatePasswordControl({
  updatePasswordUC,
});
const deleteUserController = deleteUserControl({ deleteUserUC });

// transaction controller execution
const saveTransactionController = saveTransactionControl({
  saveTransactionUC,
});
const getAllTransactionController = getAllTransactionControl({
  getAllTransactionUC,
});
const getSpecificTransactionController = getSpecificTransactionControl({
  getSpecificTransactionUC,
});
const processTransactionController = processTransactionControl({
  processTransactionUC,
});
module.exports = {
  addNewProductController,
  getSpecificProdController,
  getAllProductController,
  addUserController,
  loginUserController,
  saveTransactionController,
  getAllTransactionController,
  getAllUserController,
  getSpecificTransactionController,
  processTransactionController,
  updatePasswordController,
  deleteUserController
};
