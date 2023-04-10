const {BadRequestError,UnauthenticatedError} = require('../errors');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/userModel');


const register = async  (req, res) => {
	const user = await User.create({ ...req.body });

	const token = user.getSignedJwtToken();

	res.status(201).json({ success: true, user: user.name, token });
}

const login = async (req, res) => {
    	const { email, password } = req.body;

		if (!email || !password) {
			throw new BadRequestError('Please provide email and password');
		}
		const user = await User.findOne({ email });
		if (!user) {
			throw new UnauthenticatedError('Invalid Credentials');
		}
		const isPasswordCorrect = await user.comparePassword(password);
		if (!isPasswordCorrect) {
			throw new UnauthenticatedError('Invalid Credentials');
		}
		// compare password
		const token = user.getSignedJwtToken();
		res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
}

const getMe = async (req, res) => {
    


    const user={
        name:req.user.name,
        email:req.user.email

    }

    res.status(200).json({success: true,user});

}

module.exports = {
    register,
    login,
    getMe
}


