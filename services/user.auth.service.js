import { users } from '../dal/user.dal.js';
import { hashPassword, verifyPassword } from '../utils/hash.js';
import { createToken } from '../utils/token.js';

export const registerUser = async (username, password) => {

    // Check if the username already exists
    const existingUser = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    );

    if (existingUser) {
        throw new Error('Username already exists');
    }

    // Hash the user's password
    const hashedPassword = await hashPassword(password);

    // Create a new user object
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
        favoriteMovies: []
    };

    users.push(newUser);

    // Return the registered user details
    return {
        id: newUser.id,
        username: newUser.username
    };
};

export const loginUser = async (username, password) => {

    // Find the user by username
    const user = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    );

    if (!user) {
        throw new Error('Invalid username or password');
    }

    // Verify the user's password
    const isPasswordValid = await verifyPassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }

    // Create a JWT token for the authenticated user
    const token = await createToken({
        id: user.id,
        username: user.username
    });

    return { token };
};