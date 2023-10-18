module.exports = function saveTransactionUC({
    transDataAccess
}) {
    return async function newTransaction(tranactionDetails) {

        // generate transaction_code
        const DRtransCode = await transDataAccess.getDRtransCode();
        tranactionDetails.transaction_status = "DR";
        tranactionDetails.transaction_code = padWithLeadingZeros(DRtransCode.count, 6);
        // console.log("tranactionDetails:", tranactionDetails);
        console.log("tranactionDetails:", tranactionDetails.trans_line);
        // save header transaction
        // const result = await transDataAccess.saveTransaction(tranactionDetails)

        // save header transaction line
        let transLineData = [];
        for await (transLine of tranactionDetails.trans_line) {
            const dataVal = {};
            transLine.transaction_id = trans_header.rows[0].transaction_id;
            const trans_line = await transActionDataAccess.saveTransactionLine(
                transLine
            );

            dataVal.transaction_line_tbl = trans_line.rows[0].transaction_line_tbl;
            dataVal.transaction_id = trans_line.rows[0].transaction_id;
            dataVal.product_id = trans_line.rows[0].product_id;
            dataVal.quantity = trans_line.rows[0].quantity;

            transLineData.push(dataVal);
        }

        return {
            message: "Transaction saved!",
            // result
        }
    }

    function padWithLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, "0");
    }
}