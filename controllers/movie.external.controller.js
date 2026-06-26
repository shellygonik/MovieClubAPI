import { searchMovieByTitle } from '../services/movie.external.service.js';

export const searchMovie = async (req, res) => {
    try {

        const { title } = req.query;

        if (!title) {
            return res.status(400).json({
                message: 'Title is required'
            });
        }

        const result = await searchMovieByTitle(title);

        res.status(200).json(result);

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
};