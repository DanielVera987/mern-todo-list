"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../components/auth/routes"));

var _routes2 = _interopRequireDefault(require("../components/task/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/auth', _routes["default"]);
router.use('/task', _routes2["default"]);
var _default = router;
exports["default"] = _default;