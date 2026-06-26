import express from 'express';

import movieRoutes from './movie.routes.js';
import movieExternalRoutes from './movie.external.routes.js';

const router = express.Router();

/*
    Register external movie routes before routes with :id
    so that /search is not treated as a movie ID.
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