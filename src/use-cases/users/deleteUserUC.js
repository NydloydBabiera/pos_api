module.exports = function deleteUserUC({ userDataAccess }) {
  return async function deleteUser(userId) {
    // check if user can be deleted
    const check = await userDataAccess.canDeleteUser(userId);
    if (check.rowCount > 0) {
      throw new Error("User already used in transaction cannot delete");
    }
    //add new user to DB
    const result = await userDataAccess.deleteUser(userId);

    return { msg: "User deleted successfully", result };
  };
};
