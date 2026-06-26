import {
    addFavoriteMovie,
    getFavoriteMovies
} from '../services/user.favorite.service.js';

export const addFavorite = async (req, res) => {
    try {

        // Get the user id and movie id from the request
        const { id } = req.params;
        const { movieId } = req.body;

        // Add a movie to the user's favorites
        const result = await addFavoriteMovie(
            req.user.id,
            id,
            movieId
        );

        res.status(200).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};

export const getFavorites = async (req, res) => {
    try {

        // Get the user id from the request parameters
        const { id } = req.params;

        // Retrieve the user's favorite movies
        const result = await getFavoriteMovies(
            req.user.id,
            id
        );

        res.status(200).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};