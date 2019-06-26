const db = require('../data/dbConfig')

module.exports = {
    getSeekerById,
    getEmployerById,
    getSeekers,
    getEmployers
}

function getSeekerById(id) {
    return db('users').where( {id, is_employer: false} ).first();
}

function getEmployerById(id) {
    return db('users').where( {id, is_employer: true} ).first();
}

function getSeekers() {
    return db('users').where({is_employer: false}).select('id', 'first_name', 'last_name')
}

function getEmployers() {
    return db('users').where({is_employer: true}).select('id', 'first_name', 'last_name')
}