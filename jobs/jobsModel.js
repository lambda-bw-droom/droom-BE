const db = require('../data/dbConfig')

module.exports = {
    getJobs,
    getJobsById,
    insertJob,
    removeJob,
    updateJob
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

function insertJob(job) {
    return db('jobs')
    .insert(job, 'id')
}

function removeJob(id) {
    return db('jobs')
      .where({id}, 'id')
      .del();
}

function updateJob(id, changes) {
    return db('jobs')
      .where({id}, 'id')
      .update(changes)
  }


  