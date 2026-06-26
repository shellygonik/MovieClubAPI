
import { movies } from '../dal/movie.dal.js';
import { filterArr } from '../utils/filter.js';
console.log("MOVIE SERVICE LOADED");

console.log('FILTER IMPORTED:', filterArr);

export const getAllMovies = async () => {
    return movies;
};

export const getMovieById = async (movieId) => {

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

    return filterArr(
        movies,
        filterBy,
        condition,
        value
    );
};