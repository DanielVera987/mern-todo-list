import supertest from 'supertest';
import app from '../src/bin/www';

export const server = supertest.agent(app);
