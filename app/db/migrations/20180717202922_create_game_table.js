
exports.up = (knex, Promise) => {
	return knex.schema
	.createTable('game', (table) => {
			table.increments();
			table.string('title').notNullable();
	})
};

exports.down = (knex, Promise) => knex.schema
	.dropTable('game');
