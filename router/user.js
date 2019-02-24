let user = require('../controllers/usersController')
var express = require('express')
var router = express.Router()

router.get('/', user.getUserRoot)

router.get('/user', user.getUserRoot)

router.get('/categories', user.getCategories)

router.get('/category/:id', user.getCategory)

router.post('/link/add', user.addLink)

module.exports = router
