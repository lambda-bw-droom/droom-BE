
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        { 
          id: 1,
          user_id: 1,
          job_id: 1,
        }
      ]);
    });
};
