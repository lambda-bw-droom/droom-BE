exports.up = function(knex, Promise) {
    return knex.schema.createTable('niche', tbl => {
        tbl.increments();
        tbl.string('niche').notNullable();
    }) 

    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.boolean('is_employer').notNullable().defaultTo('false');
        tbl.string('first_name').notNullable()
        tbl.string('last_name');
        tbl.string('email').notNullable().unique();
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
        tbl.string('job_title').notNullable();
        tbl.string('job_company').notNullable();
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
