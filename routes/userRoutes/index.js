import express from 'express';

import authRoutes from './user.auth.routes.js';
import favoriteRoutes from './user.favorite.routes.js';

const router = express.Router();

router.use('/', authRoutes);

router.use('/', favoriteRoutes);

export default router;