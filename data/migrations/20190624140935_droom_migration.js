exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.boolean('is_employer').notNullable().defaultTo('false');
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
