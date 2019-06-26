exports.up = function(knex, Promise) {
    return knex.schema.createTable('jobs', tbl => {
        tbl.increments();
        tbl.string('job_title');
        tbl.string('job_company');
        tbl.string('start_date');
        tbl.string('job_type');
        tbl.string('education');
        tbl.string('starting_pay');
        tbl.string('description');
        tbl.string('responsibilities');
        tbl.string('required_skills');
        tbl.string('posted_date');

        tbl.boolean('seen').defaultTo('false')
        
    }) 

    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').unique();
        tbl.string('password');
        tbl.boolean('is_employer').defaultTo('false');
        tbl.string('first_name')
        tbl.string('last_name');
        tbl.string('email').unique();
        tbl.string('about');
        tbl.string('phone');
        tbl.string('linkedIn').unique();
        tbl.string('github').unique();
        tbl.string('website');
        tbl.string('location');
        tbl.string('position');
        tbl.string('bio');
        tbl.string('interests');
        tbl.string('education');
        tbl.string('skills');
        tbl.string('portfolio');
        tbl.string('references');
        tbl.timestamp('created_at').defaultTo(knex.fn.now());


    })

    .createTable('matches', tbl => {
        tbl.increments();
        tbl.integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.integer('job_id')
        .references('id')
        .inTable('jobs')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};



exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('matches')
    .dropTableIfExists('jobs');
};
