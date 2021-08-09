import express from 'express';

import auth from '../components/auth/routes';
import task from '../components/task/routes';

const router = express.Router();

router.use('/auth', auth);
router.use('/task', task);

export default router;
