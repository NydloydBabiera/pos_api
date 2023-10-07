module.exports = function transactionActions({pool}){
    return Object.freeze({});

    async function saveTransaction(tranactionDetails){

        let {transaction_code, date_trans, amt_total, amt_paid, payment_type, customer_id, transaction_status} = tranactionDetails;

        let sql = `INSERT INTO public.transaction_info(transaction_code, date_trans, 
            amt_total, amt_paid, payment_type, cashier_id, customer_id, transaction_status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

        let param = [transaction_code, date_trans, amt_total, amt_paid, payment_type, customer_id, transaction_status];

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }
        
    }
}