const db = require('../database/db-connection')

exports.getAdminRoot = function(req, res) {
    res.status(200).send('Inside Admin')
}

exports.getProposed = function(req, res) {
    res.status(200).send('Admin: Link proposed')
}

exports.putApprove = function(req, res) {
    res.status(200).send('Admin: Link approved')
}

exports.deleteLink = function(req, res) {
    res.status(200).send('Admin: Link deleted')
}
