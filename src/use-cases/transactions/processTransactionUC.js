module.exports = function processTransactionUC({ transDataAccess }) {
  return async function processTransactions(product_id) {
    const result = await transDataAccess.processTransaction(product_id);

    return { message: "Transaction processed!", result };
  };
};
