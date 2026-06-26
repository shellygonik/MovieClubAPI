import express from 'express';

import movieRoutes from './movieRoutes/index.js';
import userRoutes from './userRoutes/index.js';
import triviaRoutes from './triviaRoutes/index.js';

const router = express.Router();

// Register movie routes
router.use('/movies', movieRoutes);

// Register user routes
router.use('/users', userRoutes);

// Register trivia routes
router.use('/trivia', triviaRoutes);

export default router;