"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = require("../../services/firebase");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var daoTask = {};

daoTask.getTasks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {
    var res, tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _firebase.db.collection('users').doc(userId).collection('tasks').get();

          case 2:
            res = _context.sent;
            tasks = [];
            res.forEach(function (doc) {
              tasks.push({
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                complete: doc.data().complete
              });
            });
            return _context.abrupt("return", tasks);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

daoTask.getTask = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId, id) {
    var task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _firebase.db.collection('users').doc(userId).collection('tasks').doc(id).get();

          case 2:
            task = _context2.sent;

            if (task.exists) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", false);

          case 5:
            return _context2.abrupt("return", task.data());

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

daoTask.createTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userId, data) {
    var newTask;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _firebase.db.collection('users').doc(userId).collection('tasks').doc().set(data);

          case 2:
            newTask = _context3.sent;
            return _context3.abrupt("return", newTask);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

daoTask.updateTask = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(userId, id, data) {
    var isExist, updateTask;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return daoTask.getTask(userId, id);

          case 2:
            isExist = _context4.sent;

            if (isExist) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", false);

          case 5:
            _context4.next = 7;
            return _firebase.db.collection('users').doc(userId).collection('tasks').doc(id).update(data);

          case 7:
            updateTask = _context4.sent;
            return _context4.abrupt("return", updateTask);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

daoTask.deleteTask = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userId, id) {
    var isExist;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return daoTask.getTask(userId, id);

          case 2:
            isExist = _context5.sent;

            if (isExist) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", false);

          case 5:
            _context5.next = 7;
            return _firebase.db.collection('users').doc(userId).collection('tasks').doc(id)["delete"]();

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = daoTask;
exports["default"] = _default;