const knex = require('./db-connection')

module.exports = {
    getAll(table) {
        return knex(table)
    },
    getOne(id, table) {
        return knex(table)
            .where('id', id)
            .first()
    },
    create(data, table) {
        return knex(table).insert(data, '*')
    },
}
