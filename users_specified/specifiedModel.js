const db = require('../data/dbConfig')

module.exports = {
    getSeekerById,
    getEmployerById,
    getSeekers,
    getEmployers,
    insertEmployers,
    insertSeekers,
    removeSeeker,
    removeEmployer,
    updateSeeker,
    updateEmployer
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

// check if you need different syntax for PG
function insertEmployers(user) {
    return db('users').where({is_employer: true}).insert(user, 'id')
}

function insertSeekers(user) {
    return db('users').where({is_employer: true}).insert(user, 'id')
}

function removeSeeker(id) {
    return db('users')
      .where({is_employer: false, id}, 'id')
      .del();
}

function removeEmployer(id) {
    return db('users')
      .where({is_employer: true, id}, 'id')
      .del();
}

function updateSeeker(id, changes) {
    return db('users')
      .update(changes)
  }

function updateEmployer(id, changes) {
    return db('users')
      .update(changes)
  }