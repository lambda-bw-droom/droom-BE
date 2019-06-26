const db = require('../data/dbConfig')

module.exports = {
    SpecGetUserById,
    getSeekers,
    getEmployers
}

function SpecGetUserById(id) {
    return db('users').where( {id} ).first();
}

function getSeekers() {
    return db('users').where({is_employer: false}).select('id', 'first_name', 'last_name')
}

function getEmployers() {
    return db('users').where({is_employer: true}).select('id', 'first_name', 'last_name')
}