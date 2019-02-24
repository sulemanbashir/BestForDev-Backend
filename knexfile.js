// Update with your config settings.
const DATABASE_URL = process.env.DATABASE_URL

module.exports = {
    development: {
        client: 'pg',
        connection: {
            connectionString: DATABASE_URL,
            ssl: true,
        },
    },
}
