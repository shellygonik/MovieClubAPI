import {
    addFavoriteMovie,
    getFavoriteMovies
} from '../services/user.favorite.service.js';

export const addFavorite = async (req, res) => {
    try {

        const { id } = req.params;
        const { movieId } = req.body;

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

        const { id } = req.params;

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