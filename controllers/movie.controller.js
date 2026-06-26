import {
    getAllMovies,
    getMovieById,
    getFilteredMovies
} from '../services/movie.service.js';

export const getMovies = async (req, res) => {
    try {

        // Get filter parameters from the query string
        const { filterBy, condition = '=', value } = req.query;

        let result;

        // Return filtered movies if filter parameters are provided
        if (filterBy && value !== undefined) {

            result = await getFilteredMovies(
                filterBy,
                condition,
                value
            );

        } else {

            // Return all movies
            result = await getAllMovies();

        }

        res.status(200).json(result);

    } catch (error) {

        // Return an error response if something goes wrong
        res.status(400).json({
            message: error.message
        });

    }
};

export const getMovie = async (req, res) => {
    try {

        // Get the movie ID from the request parameters
        const { id } = req.params;

        // Retrieve the requested movie
        const result = await getMovieById(id);

        res.status(200).json(result);

    } catch (error) {

        // Return an error if the movie was not found
        res.status(404).json({
            message: error.message
        });

    }
};