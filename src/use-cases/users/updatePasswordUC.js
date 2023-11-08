module.exports = function updatePasswordUC({
    userDataAccess
}) {
    return async function updatePassword(userDetails) {
        const result = await userDataAccess.updatePassword(userDetails)

        return {
            message: "Password changed successfully!",
            result: result
        }
    }
}