
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          job_title: 'Junior Full Stack Developer',
          job_company: 'Company X',
          start_date: 'August 9, 2019',
          job_type: 'Software Development',
          education: 'Lambda School',
          starting_pay: '$75,000',
          description: 'Helping the Senior devs maintain our application',
          responsibilities: 'Bugs, standups, getting coffee',
          required_skills: 'HTML5, CSS, JavaScript, React',
          posted_date: 'May 1st, 2040',
          seen: false
        }
      ]);
    });
};
