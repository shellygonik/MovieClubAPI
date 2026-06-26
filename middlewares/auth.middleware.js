import { verifyToken } from '../utils/token.js';

export const authenticate = async (req, res, next) => {
    try {

        // Get the authorization header from the request
        const authHeader = req.headers.authorization;

        // Check if a token was provided
        if (!authHeader) {
            return res.status(401).json({
                message: 'Token is required'
            });
        }

        // Extract the token from the Bearer header
        const token = authHeader.split(' ')[1];

        // Verify and decode the JWT token
        const decoded = await verifyToken(token);

        // Store the authenticated user in the request object
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();

    } catch (error) {

        // Return an error if the token is invalid
        res.status(401).json({
            message: 'Invalid token'
        });

    }
};