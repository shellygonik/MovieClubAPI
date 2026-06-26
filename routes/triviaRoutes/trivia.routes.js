import express from 'express';

import {
    getTrivia
} from '../../controllers/trivia.controller.js';

const router = express.Router();

// Route for retrieving a random trivia question
router.get('/', getTrivia);

export default router;