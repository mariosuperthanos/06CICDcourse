import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT);
