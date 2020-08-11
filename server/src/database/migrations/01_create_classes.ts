import Knex from 'knex';

//fazer alterações
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //chave estrangeira
        table
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//desfazer alterações
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}