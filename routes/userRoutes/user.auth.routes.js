import express from 'express';

import {
    register,
    login
} from '../../controllers/user.auth.controller.js';

import { isReqHasBody } from '../../utils/reqValidation.js';

const router = express.Router();

router.post('/register', isReqHasBody, register);

router.post('/login', isReqHasBody, login);

export default router;