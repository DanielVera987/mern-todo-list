"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _celebrate = require("celebrate");

var _index = _interopRequireDefault(require("./routes/index"));

var _errors = require("./middlewares/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"]["static"]('../client/build'));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

_dotenv["default"].config('');

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  "extends": false
}));
/**
 * Routes
 */

app.use('/v1', _index["default"]);
/**
 * Errors
 */

app.use(_errors.handlerError404);
app.use((0, _celebrate.errors)());
app.use(_errors.handlerError);
var _default = app;
exports["default"] = _default;