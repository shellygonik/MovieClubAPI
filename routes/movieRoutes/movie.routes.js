import express from 'express';

import {
    getMovies,
    getMovie
} from '../../controllers/movie.controller.js';

const router = express.Router();

// Route for retrieving all movies
router.get(
    '/',
    getMovies
);

// Route for retrieving a movie by its ID
router.get(
    '/:id',
    getMovie
);

export default router;