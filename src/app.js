import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { errors } from 'celebrate';
import routes from './routes/index';
import { handlerError, handlerError404 } from './middlewares/errors';

const app = express();

app.use(express.static('../client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

dotenv.config('');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

/**
 * Routes
 */
app.use('/v1', routes);

/**
 * Errors
 */
app.use(handlerError404);
app.use(errors());
app.use(handlerError);

export default app;
