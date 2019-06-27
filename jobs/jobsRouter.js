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

router.get('/', (req, res) => {
    JobsModel.getJobs()
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

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
    let job = req.body;
    JobsModel.insertJob(job)
    .then(job => {
        res.status(201).json(job)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({error: 'error saving job to the database'})
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    JobsModel.removeJob(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(`Successfully deleted job with id ${id}`);
        } else {
            res.status(404).json({
                errorMessage: "The job with the specified ID does not exist."
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            errorMessage: "the user could not be deleted"
        })
    })
});

module.exports = router;