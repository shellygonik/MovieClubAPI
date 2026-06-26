import express from 'express';

import triviaRoutes from './trivia.routes.js';

const router = express.Router();

// Register trivia routes
router.use('/', triviaRoutes);

export default router;