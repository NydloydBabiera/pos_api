module.exports = function transactionActions({
    pool
}) {
    return Object.freeze({
        saveTransaction,
        getDRtransCode,
        saveTransactionLine,
        getAllTransactions
    });

    async function getDRtransCode() {
        let sql = `select count(*) from transaction_info`;
        try {
            let result = await pool.query(sql);
            return result.rows[0];
        } catch (error) {
            console.log("err:", error);
        }
    }

    async function saveTransaction(tranactionDetails) {



        let {
            transaction_code,
            date_trans,
            amt_total,
            amt_paid,
            payment_type,
            cashier_id,
            customer_id,
            transaction_status
        } = tranactionDetails;

        let sql = `INSERT INTO public.transaction_info(transaction_code, date_trans, 
            amt_total, amt_paid, payment_type, cashier_id, customer_id, transaction_status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

        let param = [transaction_code, date_trans, amt_total, amt_paid, payment_type, cashier_id, customer_id, transaction_status];

        try {
            let result = await pool.query(sql, param);
            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }

    }

    async function saveTransactionLine(transLine) {

        let {
            transaction_id,
            product_id,
            qty_prod,
            amt_total_lines
        } = transLine;

        let param = [transaction_id,
            product_id,
            qty_prod,
            amt_total_lines
        ];

        let sql = `INSERT INTO public.transaction_line( transaction_id, product_id, qty_prod, amt_total_lines)
            VALUES ($1, $2, $3, $4) RETURNING *`;

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }
    }

    async function getAllTransactions() {
        
        
        let sql = `Select * from transaction_info`

        try {
            let result = await pool.query(sql);
            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }
    }
}