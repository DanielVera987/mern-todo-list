import express from 'express';
import auth from '../components/auth/routes';

const router = express.Router();

router.use('/auth', auth);

export default router;
