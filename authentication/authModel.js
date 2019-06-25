const db = require('../data/dbConfig')


module.exports = {
    addUser,
    findBy
}

function findBy(filter) {
    return db('users').where(filter)
}



async function addUser(user) {
    // Postgres syntax ------->
    const [ids] = await db('users').insert(user, ['id']);
    return findById(ids.id);
}