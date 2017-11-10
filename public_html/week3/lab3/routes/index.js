const debug = require('debug')('lab3:index')
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET form page. */
router.get('/form', function(req, res, next) {
  const numbers = [
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 10 },
    { number: 20 }
  ]
  res.render('form', { title: 'Form Page', numbers : numbers })
  //debug(numbers)
})

/* POST form page. */
router.post('/form', function(req, res, next) {

  req.checkBody('numbers', 'Please select a number').notEmpty()

  //Trim and escape the name field.
  req.sanitize('numbers').escape()
  req.sanitize('numbers').trim()

  //Run the validators
  var errors = req.validationErrors()

  // Call debug function to log errors in terminal console
  debug(errors)
  res.render('form', { title: req.body.numbox, errors: errors })
})

module.exports = router
