import express from 'express';

import {
    addFavorite,
    getFavorites
} from '../../controllers/user.favorite.controller.js';

import { isReqHasBody } from '../../utils/reqValidation.js';

import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

// Route for retrieving a user's favorite movies
router.get(
    '/:id/favorites',
    authenticate,
    getFavorites
);

// Route for adding a movie to the user's favorites
router.post(
    '/:id/favorites',
    authenticate,
    isReqHasBody,
    addFavorite
);

export default router;