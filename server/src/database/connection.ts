//conexão com o banco
import knex from 'knex';
//módulo do node p/ conseguir caminhar entre os caminhos da aplicação
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,//usar nulo qndo SQLite ñ conseguir definir
})

export default db;