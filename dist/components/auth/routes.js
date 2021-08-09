"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate3 = require("celebrate");

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express["default"].Router();

router.post('/login', (0, _celebrate3.celebrate)(_defineProperty({}, _celebrate3.Segments.BODY, _celebrate3.Joi.object().keys({
  email: _celebrate3.Joi.string().email().required(),
  password: _celebrate3.Joi.string().min(6).required()
}))), _controller["default"].login);
router.post('/register', (0, _celebrate3.celebrate)(_defineProperty({}, _celebrate3.Segments.BODY, _celebrate3.Joi.object().keys({
  email: _celebrate3.Joi.string().email().required(),
  username: _celebrate3.Joi.string().required(),
  password: _celebrate3.Joi.string().min(6).required()
}))), _controller["default"].register);
var _default = router;
exports["default"] = _default;