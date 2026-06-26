import express from 'express';

import {
    addFavorite,
    getFavorites
} from '../../controllers/user.favorite.controller.js';

import { isReqHasBody } from '../../utils/reqValidation.js';

import { authenticate } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.get(
    '/:id/favorites',
    authenticate,
    getFavorites
);

router.post(
    '/:id/favorites',
    authenticate,
    isReqHasBody,
    addFavorite
);

export default router;