import express from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import controllerTask from './controller';
import isAuthenticaded from '../../middlewares/authenticaded';

const router = express.Router();

router.get('/all', [isAuthenticaded], controllerTask.getTasks);

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

router.post(
  '/',
  [
    isAuthenticaded,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        complete: Joi.boolean().required(),
      }),
    }),
  ],
  controllerTask.createTask
);

router.put(
  '/:id',
  [
    isAuthenticaded,
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string(),
      }),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        complete: Joi.boolean().required(),
      }),
    }),
  ],
  controllerTask.updateTask
);

router.delete(
  '/:id',
  [
    isAuthenticaded,
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string(),
      }),
    }),
  ],
  controllerTask.delete
);

export default router;
