module.exports = function addUserUC({ userDataAccess }) {
    return async function newUser(userInput) {
        //concat names to merge as fullname
        let fullName = userInput.firstName + " " + userInput.middleName + " " + userInput.lastName;
        let userName = userInput.firstName.charAt(0) + userInput.lastName;
        const userDetails = {};
        userDetails.fullName = fullName;
        userDetails.userName = userName;
        userDetails.user_password = userName;
        userDetails.user_role = userInput.userRole;
        //add new user to DB
        const result = await userDataAccess.addNewUser(userDetails);
  
      return result;
    };
  };
  