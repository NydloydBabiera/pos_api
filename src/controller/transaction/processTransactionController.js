module.exports = function saveTransaction({
    processTransactionUC
}) {
    return async function post(httpRequest) {
        try {
            const product_id = httpRequest.params.id;

            // Usecase
            const result = await processTransactionUC(product_id);
            if (result) {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    status: 201,
                    body: result, //,"Success!"
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
                body: {
                    errorMsg: e.message
                },
            };
        }
    };
};