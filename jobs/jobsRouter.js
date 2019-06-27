const router = require("express").Router();
const Matches = require('../matches/matchesModel');
const restrict = require('../authorization.js')
const JobsModel = require('./jobsModel.js')

// its changing user id, not job id
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

router.put('/:job_id/matches/:id', restrict, (req, res) => {
    let id = req.params.id
    // let changes = {}
    // if (req.body.employer_matched) changes = req.body.employer_matched
    // if(!changes) {
    //     return res.status(422).json({errorMessage: 'missing field employer_matched'})
    // }
    let changes = req.body;
    Matches.updateMatched(id, changes)
    
    .then(match => {
        if(!match) {
            return res.status(422).json({errorMessage: 'missing field employer_matched'})
        } else {
            res.status(201).json(match)
        } 
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
    const id = req.params.id
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
            errorMessage: "the job could not be deleted"
        })
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    JobsModel.updateJob(id, changes)
    .then(updated => {
        if(updated) {
            res.status(200).json({updated})
        } else {
            res.status(404).json({errorMessage: 'job with specific ID does not exist'})
        }
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({error: 'internal server error'})
    })
});


module.exports = router;