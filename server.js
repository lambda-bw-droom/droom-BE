const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./authentication/authRouter.js')
const usersRouter = require('./users/usersRouter.js')
const specifiedRouter = require('./users_specified/specifiedRouter.js')
const jobsRouter = require('./jobs/jobsRouter.js')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
    res.status(200).json('Server is ALIVE!')
});

server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/profile', specifiedRouter)
// server.use('/jobs', jobsRouter)

module.exports = server;