import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares';
import { countriesRouter } from './routers';
import { loadEnv } from './config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/countries', countriesRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  // Conexão com o banco removida, apenas inicializando o app
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  // Função de fechamento removida, já que não há conexão com o banco
  return Promise.resolve();
}

export default app;
