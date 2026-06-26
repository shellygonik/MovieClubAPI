import express from 'express';

import {
    getTrivia
} from '../../controllers/trivia.controller.js';

const router = express.Router();

router.get('/', getTrivia);

export default router;