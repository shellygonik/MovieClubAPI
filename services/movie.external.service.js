import { omdbApiKey } from '../config/index.js';

export const searchMovieByTitle = async (title) => {

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${title}`
    );

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    return {
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        director: data.Director,
        rating: data.imdbRating,
        poster: data.Poster
    };
};