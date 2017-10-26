const debug = require('debug')('demo:index')
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	var results = [
// 			{ author: 'Daniel', rating: 5, reviewText: 'Great Book', createdOn: '09-09-2000' },
// 			{ author: 'Matt', rating: 3, reviewText: 'Okay Book', createdOn: '05-06-2000' },
// 			{ author: 'Luke', rating: 2, reviewText: 'Boring Book', createdOn: '02-04-2010' }
// 	];
// 	res.render('index', { title: 'Express', results : results });
// });


router.get('/form', function(req, res, next) {
  const numbers = [
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 10 },
    { num: 20 }
  ]
  res.render('form', { title: 'Form Page' })
})

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
