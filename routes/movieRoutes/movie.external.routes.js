import express from 'express';

import {
    searchMovie
} from '../../controllers/movie.external.controller.js';

const router = express.Router();

router.get(
    '/search',
    searchMovie
);

export default router;