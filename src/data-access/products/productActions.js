module.exports = function productActions({pool}){
    return Object.freeze({addNewProduct, getSpecificProduct});

    async function addNewProduct(prodDetails){
        const {barcode, productName, productDesc, size, price} = prodDetails;

        let sql = `INSERT INTO public.product_info(barcode, name_prod, description, prod_size, price)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`;

        let param = [barcode, productName, productDesc, size, price];

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR:", err);
        }
    }

    async function getSpecificProduct(productCode){
        const {barcode} = productCode;

        let sql = `Select * from product_info where barcode = $1`;
        let param = [productCode];

        try {
            let result = await pool.query(sql, param)
            return result;
        } catch (error) {
            console.log("ERROR:",error);
        }


    }
}