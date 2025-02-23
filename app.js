import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);
console.log('app listnest to port', process.env.PORT)
app.listen(process.env.PORT);
