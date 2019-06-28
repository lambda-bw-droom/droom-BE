const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../configSecrets/secret.js')
const AuthModel = require('./authModel.js')


//Test Done
router.post('/register', (req, res) => {
    let user = req.body;
    console.log('req body user', user)
    if(!user.first_name || !user.last_name || !user.email || !user.password || !user.is_employer) {
        return res.status(400).json({error: 'All fields required'})
    }
    // filter out already register user, "user with username exists"
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;
    AuthModel.addUser(user)
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
// Test Done
router.post('/login', (req, res) => {
    let {email, password} = req.body;

    AuthModel.findBy({email})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = makeToken(user)

            res.status(200).json({
                message: `Welcome ${user.email}!`,
                is_employer: user.is_employer,
                id: user.id,
                token
            });
        } else {
            res.status(401).json({ message: 'Check email and password fields'});
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