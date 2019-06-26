
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('niche').del()
    .then(function () {
      // Inserts seed entries
      return knex('niche').insert([
        { 
          id: 8,
          niche: 'Software Development'
        }
      ]);
    });
};
