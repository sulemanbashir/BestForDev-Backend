//Environment development or production
const environment = 'development' || process.env.NODE_ENV
//knex init file
const config = require('../knexfile')
//configration for environment
const environmentConfig = config[environment]
//include knex library
const knex = require('knex')
//connection
const connection = knex(environmentConfig)

module.exports = connection
