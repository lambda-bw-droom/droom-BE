const db = require('../data/dbConfig')

module.exports = {
    getSeekersByJobId
}

function getSeekersByJobId(userId, jobId) {
    return db('users').where()
}