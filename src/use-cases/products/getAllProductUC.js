module.exports = function getAllProductUC({ productDataAccess }) {
    return async function getAllProduct() {
      const result = await productDataAccess.getAllProduct();
      
      return result;
    };
  };
  