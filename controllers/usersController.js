const db = require('../database/db-connection')

exports.getUserRoot = function(req, res) {
    res.status(200).send('Inside User')
}

exports.getCategories = function(req, res, next) {
    res.status(200).send('User: Inside categories')
}
exports.getCategory = function(req, res, next) {
    const id = req.params.id
    res.status(200).send(id)
}

exports.addLink = function(req, res, next) {
    const { url, title, category, id } = req.body
    res.status(200).send('link posted')
}
