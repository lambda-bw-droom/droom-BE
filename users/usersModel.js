const db = require('../data/dbConfig')


module.exports = {
    getUserById,
    getUsers
}

function getUserById(id) {
    return db('users').where( {id} ).first();
}

function getUsers() {
    return db('users').select('id', 'username')
}