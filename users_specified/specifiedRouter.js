const router = require("express").Router();
const SpecModel = require('./specifiedModel.js');
const restrict = require('../authorization.js');

// UPDATE USERS
router.put('/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    SpecModel.update(id, changes)
    .then(updated => {
        if(updated) {
            res.status(200).json({updated})
        } else {
            res.status(404).json({errorMessage: 'seeker or employer with specific ID does not exist'})
        }
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({error: 'internal server error'})
    })
});

// SEEKERS
//Tests done
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
// Tests done
router.get('/seekers/:id', restrict, (req, res) => {
    const id = req.params.id;

    SpecModel.getSeekerById(id)
    .then(seeker => {
        if (seeker) {
            res.status(200).json(seeker)
        } else {
            res.status(400).json({errorMessage: 'Specified id is either an employer or does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});

router.post('/seeker', (req, res) => {
    let user = req.body;
    SpecModel.insertSeekers(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({error: 'error saving seeker to the database'})
    })
});


router.delete('/seeker/:id', (req, res) => {
    const {id} = req.params
    SpecModel.removeSeeker(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(`Successfully deleted seeker with id ${id}`);
        } else {
            res.status(404).json({
                errorMessage: "The seeker with the specified ID does not exist."
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


// EMPLOYERS
//Tests Done
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

//Tests Done
router.get('/employers/:id', restrict, (req, res) => {
    const id = req.params.id;

    SpecModel.getEmployerById(id)
    .then(employer => {
        if (employer) {
            res.status(200).json(employer)
        } else {
            res.status(400).json({errorMessage: 'Specified id is either a seeker or does not exist.'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('internal server error')
    })
});

router.post('/employer', (req, res) => {
    let user = req.body;
    SpecModel.insertEmployers(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({error: 'error saving employer to the database'})
    })
});



router.delete('/employer/:id', (req, res) => {
    const {id} = req.params
    SpecModel.removeEmployer(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(`Successfully deleted employer with id ${id}`);
        } else {
            res.status(404).json({
                errorMessage: "The user with the specified ID does not exist."
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