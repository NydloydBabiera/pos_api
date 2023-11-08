"use strict";

module.exports = function updatePasswordUC(_ref) {
  var userDataAccess = _ref.userDataAccess;
  return function updatePassword(userDetails) {
    var result;
    return regeneratorRuntime.async(function updatePassword$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(userDataAccess.updatePassword(userDetails));

          case 2:
            result = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};