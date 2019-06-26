const router = require("express").Router();
const Matches = require('../matches/matchesModel');
const restrict = require('../authorization.js')


router.post('/:job_id/matches', restrict, (req, res) => {
    let job_id = req.params.job_id
    let user_id = req.decoded.subject
    Matches.addMatch(user_id, job_id)
    .then(match => {
        res.status(201).json(match)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({error: 'internal server error'})
    })
});




module.exports = router;