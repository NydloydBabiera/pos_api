module.exports = function saveTransaction({
    saveTransactionUC
}) {
    return async function post(httpRequest) {
        try {
            const tranactionDetails = httpRequest.body;

            // Usecase
            const result = await saveTransactionUC(tranactionDetails);
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