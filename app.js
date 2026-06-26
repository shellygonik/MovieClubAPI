import express from 'express';
import routes from './routes/index.js';
import { createLogger } from './utils/logger.js';

const logger = createLogger('APP');

const app = express();

app.use(express.json());

/*app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});*/

app.use((req, res, next) => {

    console.log('REQUEST:', req.method, req.originalUrl);

    logger.info(`${req.method} ${req.originalUrl}`);

    next();
});

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Movie Club API is running');
});

export default app;