module.exports = function getSpecificProductUC({ productDataAccess }) {
    return async function getSpecificProduct(productCode) {
      let dataRes = {};
      const result = await productDataAccess.getSpecificProduct(productCode);
console.log("result:",result.rows);

      // if(result.rows.length == 0){
      //   // throw new Error("No product found");
      //   result ={ message: "No product found"};
      // }

  
      return result;
    };
  };
  