const express = require('express')
const controller = require('../controllers/createUser')

const router = express()

router.post('/create', controller.createUser)

module.exports = router