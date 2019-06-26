const router = require("express").Router();
const SpecModel = require('./specifiedModel.js');
const restrict = require('../authorization.js');

router.get('/seekers', restrict, (req, res) => {
    SpecModel.getSeekers()
    .then(seekers => {
        res.status(200).json(seekers)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: 'Error retrieving seekers'
        })
    })
});

router.get('/employers', restrict, (req, res) => {
    SpecModel.getEmployers()
    .then(employers => {
        res.status(200).json(employers)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: 'Error retrieving employers'
        })
    })
});

router.get('/seekers/:id', restrict, (req, res) => {
    const id = req.params.id;

    SpecModel.getSeekerById(id)
    .then(seeker => {
        if (seeker) {
            res.status(200).json(seeker)
        } else {
            res.status(400).json({errorMessage: 'Specified seeker does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});

router.get('/employers/:id', restrict, (req, res) => {
    const id = req.params.id;

    SpecModel.getEmployerById(id)
    .then(employer => {
        if (employer) {
            res.status(200).json(employer)
        } else {
            res.status(400).json({errorMessage: 'Specified employer does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});


module.exports = router;