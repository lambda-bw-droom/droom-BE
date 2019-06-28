const db = require('../data/dbConfig')

module.exports = {
    addMatch,
    findBy,
    updateMatched,
    getMatches,
    getMatchesById
}

function findBy(filter) {
    return db('matches').where(filter)
}


async function addMatch(user_id, job_id) {
    if(process.env.NODE_ENV === 'production') {
        const [ids] = await db('matches').insert({job_id, user_id}, ['id']);
        return findBy({id: ids.id});
    } else {
        const [id] = await db('matches').insert(user);
        return findBy({id: id});
    }
} 

function updateMatched(id, changes) {
    return db('matches')
    .where('id', id)
    .update(changes)
}

function getMatchesById(id) {
    return db('matches')
    .where('id', id)
}

      // just need user id 
    // select all from matches where user_id === decoded id from jwt
    // and where reviewed at === null 