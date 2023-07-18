import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import printHello from './utils/printHello';

dotenv.config();

// Demo statements to test the imports
printHello();
printHello();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
