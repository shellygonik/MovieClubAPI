import express from 'express';
import routes from './routes/index.js';
import { createLogger } from './utils/logger.js';

const logger = createLogger('APP');

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Log every incoming request
app.use((req, res, next) => {

    logger.info(`${req.method} ${req.originalUrl}`);

    next();
});

// Register all API routes
app.use('/api', routes);

// Default route
app.get('/', (req, res) => {
    res.send('Movie Club API is running');
});

export default app;