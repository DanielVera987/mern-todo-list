"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dao = _interopRequireDefault(require("../components/auth/dao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isAuthenticaded = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, verify, email, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
              token = req.headers.authorization.split(' ')[1];
            }

            _context.prev = 1;

            if (token) {
              _context.next = 4;
              break;
            }

            throw new Error('Not Authorization1');

          case 4:
            _context.next = 6;
            return _jsonwebtoken["default"].verify(token, process.env.TOKEN);

          case 6:
            verify = _context.sent;

            if (verify) {
              _context.next = 9;
              break;
            }

            throw new Error('Not Authorization2');

          case 9:
            email = verify.email;
            _context.next = 12;
            return _dao["default"].getUserByEmail(email);

          case 12:
            user = _context.sent;

            if (!user.empty) {
              _context.next = 15;
              break;
            }

            throw new Error('Not Authorization3');

          case 15:
            user.forEach(function (doc) {
              user = {
                id: doc.id,
                email: doc.data().email,
                username: doc.data().username
              };
            });
            req.user = user;
            next();
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(401).json({
              error: _context.t0.message
            }));

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 20]]);
  }));

  return function isAuthenticaded(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = isAuthenticaded;
exports["default"] = _default;