import { users } from '../dal/user.dal.js';
import { hashPassword, verifyPassword } from '../utils/hash.js';
import { createToken } from '../utils/token.js';

export const registerUser = async (username, password) => {

    const existingUser = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    );

    if (existingUser) {
        throw new Error('Username already exists');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
        favoriteMovies: []
    };

    users.push(newUser);

    return {
        id: newUser.id,
        username: newUser.username
    };
};

export const loginUser = async (username, password) => {

    const user = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    );

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isPasswordValid = await verifyPassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }

    const token = await createToken({
        id: user.id,
        username: user.username
    });

    return { token };
};