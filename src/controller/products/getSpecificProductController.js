module.exports = function addProduct({ getSpecificProductUC }) {
    return async function post(httpRequest) {
      try {
        const productCode = httpRequest.params.id;

       
  
        // Usecase
        const result = await getSpecificProductUC(productCode);
        if (result) {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            status: 201,
            body: result.rows, //,"Success!"
          };
        } else {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            status: 400,
            body: result,
          };
        }
      } catch (e) {
        // Catch error
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: e.status ? e.status : 400,
          body: { errorMsg: e.message },
        };
      }
    };
  };
  