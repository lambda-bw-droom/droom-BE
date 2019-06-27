const db = require('../data/dbConfig')

module.exports = {
    getJobs,
    getJobsById
}

// function getSeekersByJobId(userId, jobId) {
//     return db('jobs').where()
// }

function getJobs() {
    return db('jobs');
}

function getJobsById(id) {
    return db('jobs')
    .where('id', id)
    .first();
}