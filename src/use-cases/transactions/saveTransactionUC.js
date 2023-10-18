module.exports = function saveTransactionUC({
    transDataAccess
}) {
    return async function newTransaction(tranactionDetails) {
        // generate transaction_code
        const DRtransCode = await transDataAccess.getDRtransCode();
        tranactionDetails.trans_header.transaction_code = padWithLeadingZeros(DRtransCode.count, 6);
        tranactionDetails.trans_header.transaction_status = "DR";
        // save header transaction
        const trans_header = await transDataAccess.saveTransaction(tranactionDetails.trans_header)

        // save header transaction line
        let transLineData = [];
        for await (transLine of tranactionDetails.trans_line) {
            const dataVal = {};
            transLine.transaction_id = trans_header.rows[0].transaction_id;
            const trans_line = await transDataAccess.saveTransactionLine(
                transLine
            );
            dataVal.transaction_line_tbl = trans_line.rows[0].transaction_line_tbl;
            dataVal.transaction_id = trans_line.rows[0].transaction_id;
            dataVal.product_id = trans_line.rows[0].product_id;
            dataVal.qty_prod = trans_line.rows[0].qty_prod;
            dataVal.amt_total_lines = trans_line.rows[0].amt_total_lines;

            transLineData.push(dataVal);
        }

        return {
            message: "Transaction saved!",
            trans_header: trans_header.rows,
            trans_line: transLineData,
            // result
        }
    }

    function padWithLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, "0");
    }
}