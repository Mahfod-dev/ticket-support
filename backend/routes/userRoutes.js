const router = require('express').Router();
const { register, login,getMe } = require('../controllers/userController');
const  protect  = require('../middleware/protect');

// Path: backend/routes/userRoutes.js

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/me').get(protect, getMe)

module.exports = router;
