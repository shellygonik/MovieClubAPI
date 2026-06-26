import { omdbApiKey } from '../config/index.js';

export const searchMovieByTitle = async (title) => {

    // Fetch movie information from the OMDb API
    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${title}`
    );

    const data = await response.json();

    // Throw an error if the movie was not found
    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    // Return only the required movie details
    return {
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        director: data.Director,
        rating: data.imdbRating,
        poster: data.Poster
    };
};