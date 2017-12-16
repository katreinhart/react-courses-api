const router = require('express').Router()
const ctrl = require('../controller')

app.get('/', ctrl.getAllStudents)

module.exports = router
