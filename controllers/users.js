'use strict'

const queries = require('../database/db-connection')

module.exports = function(app) {
    app.get('/', getUserRoot)
    app.get('/categories', getCategories)
    app.get('/category/:id', getCategory)
    app.post('/link/add', postLink)
}

function getUserRoot(req, res) {
    res.sendFile('/Endpoints.html', { root: '.' })
}

function getCategories(req, res) {
    queries.getAll('categories').then(categories => {
        res.json(categories)
    })
}

function getCategory(req, res) {
    const id = req.params.id
    res.status(200).send(id)
}

function postLink(req, res) {
    const { url, title, category, id } = req.body
    res.status(200).send('lonk posted')
}
