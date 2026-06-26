import {
    getAllMovies,
    getMovieById,
    getFilteredMovies
} from '../services/movie.service.js';

export const getMovies = async (req, res) => {
    try {

        console.log('GET MOVIES CALLED');
        console.log(req.query);

        const { filterBy, condition = '=', value } = req.query;

        let result;

        if (filterBy && value !== undefined) {

            result = await getFilteredMovies(
                filterBy,
                condition,
                value
            );

        } else {

            result = await getAllMovies();

        }

        res.status(200).json(result);

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: error.message
        });

    }
};

export const getMovie = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await getMovieById(id);

        res.status(200).json(result);

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
};