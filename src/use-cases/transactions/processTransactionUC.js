module.exports = function processTransactionUC({ transDataAccess }) {
  return async function processTransactions(tranactionDetails) {
    const result = await transDataAccess.processTransaction(tranactionDetails);

    return { message: "Transaction processed!", result };
  };
};
