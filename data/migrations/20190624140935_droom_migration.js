exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.boolean('is_employer').notNullable().defaultTo('false');
        tbl.string('first_name').notNullable()
        tbl.string('last_name').notNullable()
        tbl.string('email').notNullable().unique()
        tbl.string('about');
        tbl.string('phone');
        tbl.string('linkedIn');
        tbl.string('github');
        tbl.string('website');
        tbl.string('location');
        tbl.string('position');
        tbl.string('bio');
        tbl.string('interests');
        tbl.string('education');
        tbl.string('skills');
        tbl.string('portfolio');
        tbl.string('references');
        tbl.timestamp('timestamp');
        // linking niche to user
        tbl
        .integer('niche_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('niche')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('niche', tbl => {
        tbl.increments();
        tbl.string('niche').notNullable();
    })

    .createTable('jobs', tbl => {
        tbl.increments();
        tbl.string('job_title');
        tbl.string('start_date');
        tbl.string('job_type');
        tbl.string('starting_pay');
        tbl.string('description');
        tbl.string('responsibilities');
        tbl.string('required_skills')
        // linking niche to job
        tbl
        .integer('niche_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('niche')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl.boolean('seen').defaultTo('false')


    })
};



exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
