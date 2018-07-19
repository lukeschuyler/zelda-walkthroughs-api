
exports.up = (knex, Promise) => {
	return knex.schema
	.createTable('walkthrough', table => {
            table.increments();
            table.integer('game_id').unsigned().references('game.id')
			table.text('content', 'longtext').notNullable();
	})
}

exports.down = (knex, Promise) => { 
    return knex.schema
    .dropTable('walkthrough');     
}
