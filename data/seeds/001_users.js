
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'JohnSeeker',
          password: '$2a$10$Muqvtufsl7Xn1I6O7XLieOgagYBrOXjwUirRbM8f3445/WtBPJSri',
          is_employer: false,
          first_name: 'John',
          last_name: 'Seeker',
          email: 'js@mail.com',
          about: 'John is a seeker',
          phone: '888-888-8888',
          linkedIn: 'linkedin.com/johnseeker',
          github: 'github.com/johnseeker',
          location: 'San Diego, California',
          position: 'Full Stack Developer',
          bio: 'John is an amazing full stack dev!',
          interests: 'Ruby, Python, JavaScript, Travel',
          education: 'Lambda School',
          skills: 'Front end, back end, and more',
          portfolio: 'johnseeker.com',
          references: 'Sam, Joe, Bob',
          niche_id: 8
        },
        {
          username: 'CompanyX',
          password: '$2a$10$Muqvtufsl7Xn1I6O7XLieOgagYBrOXjwUirRbM8f3445/WtBPJSri',
          is_employer: true,
          first_name: 'Company X',
          last_name: 'Company X',
          email: 'companyx@mail.com',
          about: 'Employer for Company X',
          phone: '777-777-7777',
          linkedIn: 'linkedin.com/companyx',
          github: 'github.com/companyx',
          location: 'San Francisco, California',
          niche_id: 8
        }
      ]);
    });
};
