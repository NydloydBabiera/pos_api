module.exports = function getSpecificProductUC({ productDataAccess }) {
    return async function getSpecificProduct(productCode) {
      const result = await productDataAccess.getSpecificProduct(productCode);

      if(!result){
        throw new Error("No product found");
      }
  
      return result;
    };
  };
  