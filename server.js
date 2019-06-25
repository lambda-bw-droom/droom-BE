const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./authentication/authRouter.js')
const usersRouter = require('./users/usersRouter.js')
const restrict = require('./authorization')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(restrict());

server.get('/', (req, res) => {
    res.status(200).json('Server is ALIVE!')
});

server.use('/auth', authRouter)
server.use('/users', usersRouter)

module.exports = server;