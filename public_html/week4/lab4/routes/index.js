var express = require('express');
var router = express.Router();
var ctrlHome = require('./review.controller');

// Routes for views
router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
router.all('/update/:id?', ctrlHome.update);
router.all('/view', ctrlHome.view);
router.all('/delete/:id?', ctrlHome.delete)


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
