const router = require("express").Router();
const UsersModel = require('./usersModel.js');
const restrict = require('../authorization.js')

//Test done
router.get('/', restrict, (req, res) => {
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
//Test done
router.get('/:id', restrict, (req, res) => {
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