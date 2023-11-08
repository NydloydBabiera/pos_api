"use strict";

module.exports = function userActions(_ref) {
  var pool = _ref.pool;
  return Object.freeze({
    addNewUser: addNewUser,
    loginUser: loginUser,
    getAllUser: getAllUser,
    updatePassword: updatePassword
  });

  function addNewUser(userDetails) {
    var fullName, userName, user_password, user_role, sql, param, result;
    return regeneratorRuntime.async(function addNewUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fullName = userDetails.fullName, userName = userDetails.userName, user_password = userDetails.user_password, user_role = userDetails.user_role;
            sql = "INSERT INTO public.user_info(full_name, username, user_password, user_role)\n            VALUES ($1, $2, $3, $4) RETURNING *";
            param = [fullName, userName, user_password, user_role];
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(pool.query(sql, param));

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log("ERROR:", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 10]]);
  }

  function loginUser(userCredentials) {
    var userName, userPassword, sql, param, result;
    return regeneratorRuntime.async(function loginUser$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userName = userCredentials.userName, userPassword = userCredentials.userPassword;
            sql = "select * from user_info where userName = $1 and user_password = $2";
            param = [userName, userPassword];
            _context2.prev = 3;
            _context2.next = 6;
            return regeneratorRuntime.awrap(pool.query(sql, param));

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            console.log("ERROR:", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[3, 10]]);
  }

  function getAllUser() {
    var sql, result;
    return regeneratorRuntime.async(function getAllUser$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = "select * from user_info";
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(pool.query(sql));

          case 4:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR:", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }

  function updatePassword(userDetails) {
    var userId, newPassword, sql, param, result;
    return regeneratorRuntime.async(function updatePassword$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = userDetails.userId, newPassword = userDetails.newPassword;
            sql = "update user_info\n        set user_password = $1\n        where user_id = $2\n        returning  *";
            param = [newPassword, userId];
            _context4.prev = 3;
            _context4.next = 6;
            return regeneratorRuntime.awrap(pool.query(sql, param));

          case 6:
            result = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            console.log("ERROR:", _context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[3, 9]]);
  }
};