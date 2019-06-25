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








module.exports = router;