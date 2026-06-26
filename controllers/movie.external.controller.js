import { searchMovieByTitle } from '../services/movie.external.service.js';

export const searchMovie = async (req, res) => {
    try {

        // Get movie title from query parameters
        const { title } = req.query;

        // Validate that a title was provided
        if (!title) {
            return res.status(400).json({
                message: 'Title is required'
            });
        }

        // Search for the movie using the external API
        const result = await searchMovieByTitle(title);

        res.status(200).json(result);

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
};