const db = require('../data/dbConfig')

module.exports = {
    addMatch,
    findBy
}

function findBy(filter) {
    return db('matches').where(filter)
}


async function addMatch(job_id, user_id) {
    if(process.env.NODE_ENV === 'production') {
        const [ids] = await db('matches').insert({job_id, user_id}, ['id']);
        return findBy({id: ids.id});
    } else {
        const [id] = await db('matches').insert(user);
        return findBy({id: id});
    }
} 