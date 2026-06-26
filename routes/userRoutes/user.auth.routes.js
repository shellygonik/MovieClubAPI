import express from 'express';

import {
    register,
    login
} from '../../controllers/user.auth.controller.js';

import { isReqHasBody } from '../../utils/reqValidation.js';

const router = express.Router();

// Route for user registration
router.post('/register', isReqHasBody, register);

// Route for user login
router.post('/login', isReqHasBody, login);

export default router;