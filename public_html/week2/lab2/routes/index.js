var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' })
})

/* GET about page. */
router.get('/about', function (req, res, next) {
	res.render('about', { title: 'About' })
})

/* GET error page. */
router.get('/errror', function (req, res, next) {
	res.render('error', { title: 'Error'})
})

/* GET & POST for form page. */
router.get('/form', function (req, res, next) {

	var msg = ''
	if (req.query.empty === 'true') {
		msg = 'Please enter a value'
	}
	res.render('form', {
		title: 'Form Page',
		message: msg
	})
}).post('/form', function (req, res, next) {
	if (req.method === 'POST' && req.body.name.length) {

		next()

	} else {
		res.render('form', {
			title: 'Form Page',
			message: 'Please enter a value'
		})
	}
}).post('/form', function (req, res, next) {
	if (req.method === 'POST' && req.body.name.length) {
		res.render('results', {
			title: 'Form Post Page',
			name: req.body.name,
			email: req.body.email,
			comments: req.body.comments
		})

	} else {
		res.redirect('/form?empty=true')

	}
})

/* GET results page. */
router.get('/results', function (req, res, next) {
	res.render('results', { title: 'Results' })
})

module.exports = router
