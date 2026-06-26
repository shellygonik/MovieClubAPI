import { users } from '../dal/user.dal.js';
import { movies } from '../dal/movie.dal.js';

export const addFavoriteMovie = async (
    loggedInUserId,
    userId,
    movieId
) => {

    // Verify that the authenticated user matches the requested user
    if (loggedInUserId !== Number(userId)) {
        throw new Error('Unauthorized access');
    }

    // Find the requested user
    const user = users.find(
        user => user.id === Number(userId)
    );

    if (!user) {
        throw new Error('User not found');
    }

    // Find the requested movie
    const movie = movies.find(
        movie => movie.id === Number(movieId)
    );

    if (!movie) {
        throw new Error('Movie not found');
    }

    // Check if the movie is already in the favorites list
    const alreadyFavorite = user.favoriteMovies.includes(
        Number(movieId)
    );

    if (alreadyFavorite) {
        throw new Error('Movie already added to favorites');
    }

    // Add the movie to the favorites list
    user.favoriteMovies.push(Number(movieId));

    return {
        message: 'Movie added to favorites'
    };
};

export const getFavoriteMovies = async (
    loggedInUserId,
    userId
) => {

    // Verify that the authenticated user matches the requested user
    if (loggedInUserId !== Number(userId)) {
        throw new Error('Unauthorized access');
    }

    // Find the requested user
    const user = users.find(
        user => user.id === Number(userId)
    );

    if (!user) {
        throw new Error('User not found');
    }

    // Return all favorite movies of the user
    const favoriteMovies = movies.filter(
        movie => user.favoriteMovies.includes(movie.id)
    );

    return favoriteMovies;
};