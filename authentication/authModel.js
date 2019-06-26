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
    // const [ids] = await db('users').insert(user, ['id']);
    // return findBy({id: ids.id});

    const [ids] = await db('users').where({first_name, last_name, email, password, is_employer}).insert(user, ['id']);
    return findBy({id: ids.id});
}