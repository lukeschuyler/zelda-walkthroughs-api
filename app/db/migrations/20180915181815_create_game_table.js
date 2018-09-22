
exports.up = (knex, Promise) => {
	return knex.schema
	.createTable('walkthrough', table => {
            table.increments();
            table.integer('game_id').unsigned().references('game.id')   
            table.string('dungeon_name').notNullable();  
			table.text('content', 'longtext').notNullable();
	})
}

exports.down = (knex, Promise) => knex.schema
    .dropTable('walkthrough');     
