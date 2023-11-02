module.exports = function getSpecificTransactionUC({
    transDataAccess
}) {
    return async function getSpecificTransactions(product_id) {
        
        const transaction_header = await transDataAccess.getHeaderTransaction(product_id);
        const transaction_line = await  transDataAccess.getTransactionLine(product_id);

        return {
            transaction_header: transaction_header,
            transaction_line: transaction_line
        };
    }


}