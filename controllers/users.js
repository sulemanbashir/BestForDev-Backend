'use strict'

const quries = require('../database/quries')

module.exports = function(app) {
    app.get('/', getUserRoot)
    app.get('/categories', getCatgories)
    app.get('/category/:id', isValidId, getCategoryTuple)
    app.post('/link/add', addLink)
}

function getUserRoot(req, res) {
    res.sendFile('/Endpoints.html', { root: '.' })
}

function getCatgories(req, res) {
    quries.getAll('categories').then(categories => {
        res.json(categories)
    })
}

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next()
    res.status(404).send('Invalid ID')
}

function getCategoryTuple(req, res, next) {
    quries.getOne(req.params.id, 'categories').then(categories => {
        if (categories) {
            res.json(categories)
        } else {
            res.status(404).send('Not found')
        }
    })
}

function addLink(req, res, next) {
    quries.create(req.body, 'links').then(links => {
        res.json(links[0])
        res.status(201).send('link created')
    })
}
