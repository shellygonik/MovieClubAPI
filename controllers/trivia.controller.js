import {
    getTriviaQuestion
} from '../services/trivia.service.js';

export const getTrivia = async (req, res) => {
    try {

        const result = await getTriviaQuestion();

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};