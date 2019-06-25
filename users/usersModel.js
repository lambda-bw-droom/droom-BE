const db = require('../data/dbConfig')


module.exports = {
    getUserById,
    getUser
}

function getUserById(id) {
    return db('users').where( {id} ).first();
}

function getUser() {
    return db('users').select('id', 'username', 'password', 'department')
}