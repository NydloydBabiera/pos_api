module.exports = function loginUserUC({ userDataAccess }) {
    return async function loginUser(userCredentials) {
        //check if user exist in entity

        //add new user to DB
        const result = await userDataAccess.loginUser(userCredentials);
        const returnMsg = {};
        if(result){
            returnMsg.message = "Login sucessfully!"
            returnMsg.data = result.rows[0];
        }
  
      return returnMsg;
    };
  };
  