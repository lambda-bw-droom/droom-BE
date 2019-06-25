const router = require("express").Router();
const UsersModel = require('./usersModel.js');


router.get('/', (req, res) => {
    UsersModel.getUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: 'Error retrieving users'
        })
    })
});

server.get('/:id', (req, res) => {
    const id = req.params.id;

    UsersModel.getUserById(id)
    .then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({errorMessage: 'Specified user does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});








module.exports = router;