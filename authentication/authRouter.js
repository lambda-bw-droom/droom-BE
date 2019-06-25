const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../configSecrets/secret.js')
const AuthModel = require('./authModel.js')

router.post('/register', (req, res) => {
    let user = req.body;
    if(!user.first_name || !user.last_name || !user.email || !user.password) {
        return res.status(400).json({error: 'All fields required'})
    }
    // filter out already register user, "user with username exists"
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;
    console.log(user)
    AuthModel.addUser({ 
        //whitelisting 
        first_name: user.first_name, 
        last_name: user.last_name,
        email: user.email,
        password: user.password
     })
     .then(saved => {
         const token = makeToken(user)
         res.status(201).json({
             saved,
             token
         })
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({
             error: '500 internal server error'
         })
     })

});

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    AuthModel.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = makeToken(user)

            res.status(200).json({
                message: `Welcome ${user.username}!`,
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid or nonexistent token'});
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// both functioning!

function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }

   return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;