module.exports = function addUserUC({ userDataAccess }) {
    return async function newUser(userInput) {
      let result;
      if(userInput.isAdd === true){
        //concat names to merge as fullname
        let fullName = userInput.firstName + " " + userInput.middleName + " " + userInput.lastName;
        let userName = userInput.firstName.charAt(0) + userInput.lastName;
        const userDetails = {};
        userDetails.fullName = fullName;
        userDetails.userName = userName;
        userDetails.user_password = userName;
        userDetails.user_role = userInput.userRole;
        //add new user to DB
         result = await userDataAccess.addNewUser(userDetails);
      }else{
        // console.log("EDIT");
      //concat names to merge as fullname
      let fullName = userInput.firstName + " " + userInput.middleName + " " + userInput.lastName;
      let userName = userInput.firstName.charAt(0) + userInput.lastName;
      const userDetails = {};
      userDetails.fullName = fullName;
      userDetails.userName = userName;
      userDetails.user_password = userName;
      userDetails.user_role = userInput.userRole;
      userDetails.userId = userInput.userId;
      //add new user to DB
        result = await userDataAccess.editUser(userDetails);
      }
  
      return result;
    };
  };
  