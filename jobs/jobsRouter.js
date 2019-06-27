const router = require("express").Router();
const Matches = require('../matches/matchesModel');
const restrict = require('../authorization.js')
const JobsModel = require('./jobsModel.js')

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

router.get('/jobs', (req, res) => {
    JobsModel.getSeekers()
    .then(jobs => {
        res.status(200).json(jobs)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: 'Error retrieving jobs'
        })
    })
});

router.get('/jobs/:id', (req, res) => {
    const id = req.params.id;

    JobsModel.getJobsById(id)
    .then(job => {
        if (job) {
            res.status(200).json(job)
        } else {
            res.status(400).json({errorMessage: 'Specified id for job does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});


module.exports = router;