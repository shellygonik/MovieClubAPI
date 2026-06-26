import { movies } from '../dal/movie.dal.js';
import { filterArr } from '../utils/filter.js';

export const getAllMovies = async () => {

    // Return all movies
    return movies;
};

export const getMovieById = async (movieId) => {

    // Find a movie by its ID
    const movie = movies.find(
        movie => movie.id === Number(movieId)
    );

    if (!movie) {
        throw new Error('Movie not found');
    }

    return movie;
};

export const getFilteredMovies = async (
    filterBy,
    condition,
    value
) => {

    // Return movies that match the requested filter
    return filterArr(
        movies,
        filterBy,
        condition,
        value
    );
};