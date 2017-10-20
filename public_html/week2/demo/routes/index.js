var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Week 2 Demo' });
});

/* GET form page. */
router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Form Page' });
});

/* POST form page. */
router.post('/form', function(req, res, next) {
	
    res.render('form', { title: 'res.body.email' });
});

module.exports = router;
