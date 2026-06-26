import { users } from '../dal/user.dal.js';
import { movies } from '../dal/movie.dal.js';

export const addFavoriteMovie = async (
    loggedInUserId,
    userId,
    movieId
) => {

    if (loggedInUserId !== Number(userId)) {
        throw new Error('Unauthorized access');
    }

    const user = users.find(
        user => user.id === Number(userId)
    );

    if (!user) {
        throw new Error('User not found');
    }

    const movie = movies.find(
        movie => movie.id === Number(movieId)
    );

    if (!movie) {
        throw new Error('Movie not found');
    }

    const alreadyFavorite = user.favoriteMovies.includes(
        Number(movieId)
    );

    if (alreadyFavorite) {
        throw new Error('Movie already added to favorites');
    }

    user.favoriteMovies.push(Number(movieId));

    return {
        message: 'Movie added to favorites'
    };
};

export const getFavoriteMovies = async (
    loggedInUserId,
    userId
) => {

    if (loggedInUserId !== Number(userId)) {
        throw new Error('Unauthorized access');
    }

    const user = users.find(
        user => user.id === Number(userId)
    );

    if (!user) {
        throw new Error('User not found');
    }

    const favoriteMovies = movies.filter(
        movie => user.favoriteMovies.includes(movie.id)
    );

    return favoriteMovies;
};