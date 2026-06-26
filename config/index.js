import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const jwtKey = process.env.JWT_KEY;

export const omdbApiKey = process.env.OMDB_API_KEY;