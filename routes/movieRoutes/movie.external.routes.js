import express from 'express';

import {
    searchMovie
} from '../../controllers/movie.external.controller.js';

const router = express.Router();

// Route for searching a movie by title
router.get(
    '/search',
    searchMovie
);

export default router;