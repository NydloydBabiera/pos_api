module.exports = function userActions({ pool }) {
  return Object.freeze({
    addNewUser,
    loginUser,
    getAllUser,
    updatePassword,
    deleteUser,
    canDeleteUser,
    editUser,
  });

  async function addNewUser(userDetails) {
    const { fullName, userName, user_password, user_role } = userDetails;

    let sql = `INSERT INTO public.user_info(full_name, username, user_password, user_role)
            VALUES ($1, $2, $3, $4) RETURNING *`;

    let param = [fullName, userName, user_password, user_role];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function loginUser(userCredentials) {
    const { userName, userPassword } = userCredentials;

    let sql = `select * from user_info where userName = $1 and user_password = $2`;
    let param = [userName, userPassword];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function getAllUser() {
    let sql = `select * from user_info`;

    try {
      let result = await pool.query(sql);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function updatePassword(userDetails) {
    const { userId, newPassword } = userDetails;

    let sql = `update user_info
        set user_password = $1
        where user_id = $2
        returning  *`;

    let param = [newPassword, userId];

    try {
      let result = await pool.query(sql, param);

      return result.rows;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function deleteUser(userId) {
    let sql = `delete from user_info WHERE user_id = $1`;
    let param = [userId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function canDeleteUser(userId) {
    let sql = `select * from transaction_info
        where customer_id  = $1 or cashier_id = $1`;
    let param = [userId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
  async function editUser(userDetails) {
    const { fullName, userName, user_password, user_role, userId } =
      userDetails;
    let sql = `UPDATE user_info
	SET full_name=$1, username=$2, user_password=$3, 
    user_role=$4
	WHERE user_id = $5 RETURNING *;`;
    let param = [fullName, userName, user_password, user_role, userId];

    try {
      let result = await pool.query(sql, param);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
};
