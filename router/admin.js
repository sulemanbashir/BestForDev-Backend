let admin = require('../controllers/adminController')
var express = require('express')
var router = express.Router()

router.get('/admin', admin.getAdminRoot)
router.get('/link/proposed', admin.getProposed)
router.put('/link/approve', admin.putApprove)
router.delete('/link/delete', admin.deleteLink)

module.exports = router
