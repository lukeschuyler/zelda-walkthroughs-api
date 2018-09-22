
exports.up = (knex, Promise) => {
	return knex.schema
	.createTable('game', (table) => {
			table.increments();
			table.string('title').notNullable();
			table.integer('release_year');
			table.string('system');
	})
};

exports.down = (knex, Promise) => knex.schema
	.dropTable('game');
