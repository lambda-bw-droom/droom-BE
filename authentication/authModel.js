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
    if(process.env.NODE_ENV === 'production') {
        const [ids] = await db('users').insert(user, ['id']);
        return findBy({id: ids.id});
    } else {
        const [id] = await db('users').insert(user);
        return findBy({id: id});
    }
}