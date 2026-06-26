import express from 'express';

import movieRoutes from './movie.routes.js';
import movieExternalRoutes from './movie.external.routes.js';

const router = express.Router();

/*
    חשוב:
    search חייב לבוא לפני :id
*/

router.use(
    '/',
    movieExternalRoutes
);

router.use(
    '/',
    movieRoutes
);

export default router;