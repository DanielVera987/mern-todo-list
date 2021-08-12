"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlerError = exports.handlerError404 = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handlerError404 = function handlerError404(req, res, next) {
  next((0, _httpErrors["default"])(404));
};

exports.handlerError404 = handlerError404;

var handlerError = function handlerError(err, req, res, next) {
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = process.env.ENV === 'dev' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
};

exports.handlerError = handlerError;