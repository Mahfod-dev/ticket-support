const express = require('express');
require('express-async-errors');
require('dotenv').config();
require('colors');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/v1/users', userRouter);

// Error Handler

app.use(errorHandler);

module.exports = app;
