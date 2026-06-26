import express from 'express';

import movieRoutes from './movieRoutes/index.js';
import userRoutes from './userRoutes/index.js';
import triviaRoutes from './triviaRoutes/index.js';

const router = express.Router();

router.use('/movies', movieRoutes);

router.use('/users', userRoutes);

router.use('/trivia', triviaRoutes);

export default router;