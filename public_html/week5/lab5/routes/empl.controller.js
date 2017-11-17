
var Empl = require('./employee.model')
var debug = require('debug')('lab4:empl.controller')

module.exports.home = function (req, res) {

  if (req.method === 'POST') {

    var msg = ''

    Empl.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      startDate: req.body.startDate,
      jobTitle: req.body.jobTitle,
      salary: req.body.salary
    })
      .then(function () {
        msg = 'Employee was Saved'
        return
      })
      .catch(function (err) {
        msg = 'Employee was not Saved'
        return err.message
      }).then(function (err) {
        res.render('index', {
          title: 'Add Employee',
          message: msg,
          error: err
        })
      })

  } else {
    res.render('index', {
      title: 'Add Employee',
      message: ''
    })
  }
}

module.exports.view = function (req, res) {
  Empl
    .find()
    .exec()
    .then(function (results) {
      res.render('view', {
        title: 'View Employees',
        results: results
      })
    })
}


module.exports.update = function (req, res) {

  var id = req.params.id
  var msg = ''

  if (req.method === 'POST') {

    id = req.body._id

    Empl
      .findById(id)
      .exec()
      .then(function (employeeData) {
        // figure out why the data is not saving.
        employeeData.firstName = req.body.firstName
        employeeData.lastName = req.body.lastName
        employeeData.department = req.body.department
        employeeData.startDate = req.body.startDate
        employeeData.jobTitle = req.body.jobTitle
        employeeData.salary = req.body.salary
        debug(req.body)
        return employeeData.save()
      })
      .then(function () {
        msg = 'data has been updated'
        return
      })
      .catch(function () {
        msg = 'data has NOT been updated'
        return
      })
      .then(() => {
        finish()
      })
  } else {
    finish()
  }

  function finish() {
    Empl
      .findOne({ '_id': id })
      .exec()
      .then(function (results) {
        res.render('update', {
          title: 'Update Employees',
          message: msg,
          results: results
        })

      })
      .catch(function () {
        res.render('notfound', {
          message: 'Sorry ID not found'
        })
      })
  }
}

module.exports.delete = function (req, res) {

  var id = req.params.id,
    removed = ''

  Empl.remove({ _id: id })
    .then(function () {
      removed = `${id} has been removed`
      return
    })
    .catch(function (err) {
      removed = `${id} has not been removed`
      return err
    })
    .then((err) => {
      res.render('delete', {
        removed: removed
      })
    })
}