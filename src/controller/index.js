const model = require('../model')

class Controller {
  getAllStudents(req, res, next) {
    model.getAllStudents().then(students => res.status(200).json({ students }))
  }
}

module.exports = Controller
