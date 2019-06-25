
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'John seeker',
          password: '$2a$10$Muqvtufsl7Xn1I6O7XLieOgagYBrOXjwUirRbM8f3445/WtBPJSri',
          is_employer: false,
        },
        {
          username: 'John employer',
          password: '$2a$10$Muqvtufsl7Xn1I6O7XLieOgagYBrOXjwUirRbM8f3445/WtBPJSri',
          is_employer: true,
        }
      ]);
    });
};
