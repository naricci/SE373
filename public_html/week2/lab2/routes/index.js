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

/* GET form page. */
// router.get('/form', function (req, res, next) {
// 	res.render('form', { title: 'Form' });
// });

/* POST form page. */
// router.post('/form', function (req, res, next) {
// 	res.render('form', [{ name: 'res.body.name' }, {email: 'res.body.email'}, {comments: 'res.body.comments'}]);
// });

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
	if (req.method === 'POST' && req.body.author.length) {

		next()

	} else {
		res.render('form', {
			title: 'Form Page',
			message: 'Please enter a value'
		})
	}
}).post('/form', function (req, res, next) {
	if (req.method === 'POST' && req.body.author.length) {
		res.render('results', {
			title: 'Form Post Page',
			author: req.body.author
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
