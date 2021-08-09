"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dao = _interopRequireDefault(require("./dao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signToken = function signToken(data) {
  return _jsonwebtoken["default"].sign({
    email: data
  }, process.env.TOKEN, {
    expiresIn: 60 * 60 * 24 * 365
  });
};

var controllerAuth = {};

controllerAuth.register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, user, buf, newSalt, key, encryptedPassword;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return _dao["default"].getUserByEmail(email);

          case 3:
            user = _context.sent;

            if (user.empty) {
              _context.next = 7;
              break;
            }

            res.json({
              message: 'User already exists'
            });
            return _context.abrupt("return");

          case 7:
            buf = _crypto["default"].randomBytes(16);
            newSalt = buf.toString('base64');
            key = _crypto["default"].pbkdf2Sync(password, newSalt, 100000, 64, 'sha1');
            encryptedPassword = key.toString('base64');
            _context.next = 13;
            return _dao["default"].registerUser({
              email: email,
              username: username,
              salt: newSalt,
              password: encryptedPassword
            });

          case 13:
            user = _context.sent;
            res.json({
              user: {
                email: email,
                username: username
              }
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

controllerAuth.login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, doc, user, key, encryptedPassword, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 3;
            return _dao["default"].getUserByEmail(email);

          case 3:
            doc = _context2.sent;

            if (!doc.empty) {
              _context2.next = 7;
              break;
            }

            res.json({
              message: 'Usuer is not register'
            });
            return _context2.abrupt("return");

          case 7:
            doc.forEach(function (el) {
              user = el.data();
            });
            key = _crypto["default"].pbkdf2Sync(password, user.salt, 100000, 64, 'sha1');
            encryptedPassword = key.toString('base64');

            if (!(user.password === encryptedPassword)) {
              _context2.next = 14;
              break;
            }

            token = signToken(user.email);
            res.json({
              token: token,
              user: {
                email: user.email,
                username: user.username
              }
            });
            return _context2.abrupt("return");

          case 14:
            res.status(404).json({
              message: 'email or password are wrong'
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = controllerAuth;
exports["default"] = _default;