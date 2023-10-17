module.exports = function getAllTransactionUC({
    transDataAccess
}) {
    return async function getTransactions() {
        const result = transDataAccess.getAllTransactions();

        return result;
    }


}