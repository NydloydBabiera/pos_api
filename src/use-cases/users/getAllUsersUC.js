module.exports = function getAllUser({ userDataAccess }) {
  return async function allUser() {
    const result = userDataAccess.getAllUser();

    return result;
  };
};
