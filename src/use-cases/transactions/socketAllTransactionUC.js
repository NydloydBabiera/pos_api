
module.exports = function socketAllTransactionUC({
    transDataAccess
}) {
    return async function getsocketTransactions(ws) {
        const result = await transDataAccess.getAllTransactions();
        ws.send(result.rows)
        return result;

    }


}