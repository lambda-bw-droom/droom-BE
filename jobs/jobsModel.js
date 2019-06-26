const db = require('../data/dbConfig')

module.exports = {
    getSeekersByJobId
}

function getSeekersByJobId(userId, jobId) {
    return db('jobs').where()
}

function getJobs() {
    return db('jobs')
}

function getJobsById() {

}