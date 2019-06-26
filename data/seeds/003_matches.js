
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        { 
          id: 1,
          user_id: null,
          job_id: null,
        },
        { 
          id: 2,
          user_id: null,
          job_id: null,
        }
      ]);
    });
};
