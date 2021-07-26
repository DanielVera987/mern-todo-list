import express from 'express';

const router = express.Router();

router.get('/', (rep, res) => {
  res.json({ message: 'hola' });
});

export default router;
