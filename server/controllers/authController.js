import User from "../models/User.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
	const {name, email, password } = req.body;

	if (!name || !email || !password) {
		throw new BadRequestError('Please provide all values!');
	}
	const userAlreadyExists = await User.findOne({email});
	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use');
	}

	const user = await User.create({ name, email, password });
	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({
		user: {
			email: user.email,
			lastName: user.lastName,
			location: user.location,
			name: user.name,
		},
		token,
		location: user.location
	});

};

const login = async (req, res) => {
	res.send('User logged')
};

const updateUser = async (req, res) => {
	res.send('User updated')
};

export { register, login, updateUser }