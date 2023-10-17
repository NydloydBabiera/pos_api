module.exports = function loginUserUC({ userDataAccess }) {
  return async function loginUser(userCredentials) {
    //check if user exist in entity

    //add new user to DB
    const result = await userDataAccess.loginUser(userCredentials);
    const returnMsg = {};
    // console.log(result);
    if (result.rows.length != 0) {
      returnMsg.message = "Login sucessfully!";
      returnMsg.data = result.rows[0];
      returnMsg.status = 1;
    } else if (result.rows.length == 0) {
      returnMsg.status = 0;
    }

    return returnMsg;
  };
};
