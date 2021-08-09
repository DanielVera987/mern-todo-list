"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dao = _interopRequireDefault(require("./dao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modelTask = {};

modelTask.getTasks = function (userId) {
  return _dao["default"].getTasks(userId);
};

modelTask.getTask = function (userId, id) {
  return _dao["default"].getTask(userId, id);
};

modelTask.createTask = function (userId, data) {
  return _dao["default"].createTask(userId, data);
};

modelTask.updateTask = function (userId, id, data) {
  return _dao["default"].updateTask(userId, id, data);
};

modelTask.deleteTask = function (userId, id) {
  return _dao["default"].deleteTask(userId, id);
};

var _default = modelTask;
exports["default"] = _default;