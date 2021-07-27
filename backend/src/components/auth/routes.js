import express from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import controllerAuth from './controller';

const router = express.Router();

router.post(
  '/login',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    }),
  }),
  controllerAuth.login
);

router.post(
  '/register',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      password: Joi.string().min(6).required(),
    }),
  }),
  controllerAuth.register
);

export default router;
