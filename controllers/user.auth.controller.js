import {
    registerUser,
    loginUser
} from '../services/user.auth.service.js';

export const register = async (req, res) => {
    try {

        const { username, password } = req.body;

        const result = await registerUser(
            username,
            password
        );

        res.status(201).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};

export const login = async (req, res) => {
    try {

        const { username, password } = req.body;

        const result = await loginUser(
            username,
            password
        );

        res.status(200).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};