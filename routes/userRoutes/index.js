import express from 'express';

import authRoutes from './user.auth.routes.js';
import favoriteRoutes from './user.favorite.routes.js';

const router = express.Router();

// Register authentication routes
router.use('/', authRoutes);

// Register favorite movies routes
router.use('/', favoriteRoutes);

export default router;