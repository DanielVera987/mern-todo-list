"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate4 = require("celebrate");

var _controller = _interopRequireDefault(require("./controller"));

var _authenticaded = _interopRequireDefault(require("../../middlewares/authenticaded"));

var _celebrate2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express["default"].Router();

router.get('/all', [_authenticaded["default"]], _controller["default"].getTasks);
/*router.get(
  '/:id',
  [
    isAuthenticaded,
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string(),
      }),
    }),
  ],
  controllerTask.getTask
);*/

router.post('/', [_authenticaded["default"], (0, _celebrate4.celebrate)(_defineProperty({}, _celebrate4.Segments.BODY, _celebrate4.Joi.object().keys({
  title: _celebrate4.Joi.string().required(),
  description: _celebrate4.Joi.string().required(),
  complete: _celebrate4.Joi["boolean"]().required()
})))], _controller["default"].createTask);
router.put('/:id', [_authenticaded["default"], (0, _celebrate4.celebrate)((_celebrate2 = {}, _defineProperty(_celebrate2, _celebrate4.Segments.PARAMS, _celebrate4.Joi.object().keys({
  id: _celebrate4.Joi.string()
})), _defineProperty(_celebrate2, _celebrate4.Segments.BODY, _celebrate4.Joi.object().keys({
  title: _celebrate4.Joi.string().required(),
  description: _celebrate4.Joi.string().required(),
  complete: _celebrate4.Joi["boolean"]().required()
})), _celebrate2))], _controller["default"].updateTask);
router["delete"]('/:id', [_authenticaded["default"], (0, _celebrate4.celebrate)(_defineProperty({}, _celebrate4.Segments.PARAMS, _celebrate4.Joi.object().keys({
  id: _celebrate4.Joi.string()
})))], _controller["default"]["delete"]);
var _default = router;
exports["default"] = _default;