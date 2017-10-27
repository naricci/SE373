const debug = require('debug')('demo:index')
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET form page. */
router.get('/form', function(req, res, next) {
  const numbers = [
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 10 },
    { num: 20 }
  ]
  res.render('form', { title: 'Form Page', numbers : numbers })
})

/* POST form page. */
router.post('/form', function(req, res, next) {
		
  req.checkBody('numbox', 'Please select a number').notEmpty()
 
  //Trim and escape the name field. 
  req.sanitize('numbox').escape()
  req.sanitize('numbox').trim()
		
  //Run the validators
  var errors = req.validationErrors()
		
  // Call debug function to log errors in terminal console
  debug(errors)
  res.render('form', { title: req.body.numbox, errors: errors })
})

module.exports = router
