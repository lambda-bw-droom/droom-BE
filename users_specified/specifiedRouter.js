const router = require("express").Router();
const SpecModel = require('./specifiedModel.js');

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
            error: 'Error retrieving seekers'
        })
    })
});


module.exports = router;