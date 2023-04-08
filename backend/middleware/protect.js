const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { UnauthenticatedError } = require('../errors');

const protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (err) {
            throw new UnauthenticatedError('Not authorized to access this route');
        }
    }
    if (!token) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }
};

module.exports = protect;

