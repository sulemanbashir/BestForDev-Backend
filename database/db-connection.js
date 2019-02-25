const DATABASE_URL = process.env.DATABASE_URL
const knexConnection = require('knex')({
    client: 'pg',
    connection: {
        connectionString: DATABASE_URL,
        ssl: true,
    },
})

module.exports = {
    getAll(table) {
        return knexConnection(table)
    },
    getOne(id, table) {
        return knexConnection(table)
            .where('id', id)
            .first()
    },
    create(data, table) {
        return knexConnection(table).insert(data, '*')
    },
}
