exports.up = function(knex, Promise) {
    return knex.schema.createTable('niche', tbl => {
        tbl.increments();
        tbl.string('niche');
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
        // linking user to niche
        tbl
        .integer('niche_id')
        .unsigned()
        .references('id')
        .inTable('niche')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    .createTable('jobs', tbl => {
        tbl.increments();
        tbl.string('job_title');
        tbl.string('job_company');
        tbl.string('start_date');
        tbl.string('job_type');
        tbl.string('starting_pay');
        tbl.string('description');
        tbl.string('responsibilities');
        tbl.string('required_skills')
        // linking job to niche
        tbl
        .integer('niche_id')
        .unsigned()
        .references('id')
        .inTable('niche')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        tbl.boolean('seen').defaultTo('false')
    })
};



exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('niche')
    .dropTableIfExists('jobs');
};
