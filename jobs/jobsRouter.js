const router = require("express").Router();
const Matches = require('../matches/matchesModel');
const restrict = require('../authorization.js')
const JobsModel = require('./jobsModel.js')

// its changing user id, not job id
router.post('/:job_id/matches', restrict, (req, res) => {
    let job_id = req.params.job_id
    console.log('job_id', job_id)
    let user_id = req.decoded.subject
    console.log('user_id', user_id)
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
    let changes = req.body;
    if(!changes.employer_matched) {
        return res.status(422).json({errorMessage: 'missing field employer_matched'})
    }
    changes.employer_reviewed_at = new Date()
    Matches.updateMatched(id, changes)
    .then(match => {
            res.status(201).json(match)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({error: 'internal server error'})
    })
});

    router.get('/matches/:id', restrict, (req, res) => {
       const id = req.params.id  
       console.log('id', id)
       const user_id = req.decoded.subject 
       console.log('jwt', jwt)
        Matches.getMatchesById(id, user_id)
        .then(matches => {
            res.status(200).json(matches)
        })
        .catch(err => {
            res.status(500).json({errorMessage: "internal server error"})
        })
    });

//Test Done
router.get('/', restrict, (req, res) => {
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
//Test Done
router.get('/:id', restrict, (req, res) => {
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
// Test Done
router.post('/', restrict, (req, res) => {
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
//Test Done
router.delete('/:id', restrict, (req, res) => {
    const id = req.params.id
    JobsModel.removeJob(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(`Successfully deleted job with specified id`);
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

router.put('/:id', restrict, (req, res) => {
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