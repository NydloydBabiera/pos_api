module.exports = function userActions({pool}){
    return Object.freeze({addNewUser, loginUser});

    async function addNewUser(userDetails){
        const {fullName, userName, user_password, user_role} = userDetails;

        let sql = `INSERT INTO public.user_info(full_name, username, user_password, user_role)
            VALUES ($1, $2, $3, $4) RETURNING *`;

        let param = [fullName, userName, user_password, user_role];

        try {
            let result = await pool.query(sql,param);

            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }
    }

    async function loginUser(userCredentials){
        const {userName, userPassword} = userCredentials;

        let sql = `select * from user_info where userName = $1 and user_password = $2`;
        let param = [userName, userPassword];

        try {
            let result = await pool.query(sql, param);

            return result;
        } catch (error) {
            console.log("ERROR:", error);
        }
    }
}