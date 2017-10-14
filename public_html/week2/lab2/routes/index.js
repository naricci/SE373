var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET form page. */
router.get('/form', function (req, res, next) {
  res.render('form', { title: 'Form' });
});

/* POST form page. */
router.post('/form', function (req, res, next) {
  res.render('form', [{ name: 'res.body.name' }, {email: 'res.body.email'}, {comments: 'res.body.comments'}]);
});

module.exports = router;
