var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Passport Demo',
    user: req.user
  });
});

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
  // res.json(req.user)
  res.send('<h1>Dashboard</h1>')
});

/* GET foo page. - not this will be able to be accessed by the wildcard character in our acl.yml */
router.get('/foo', function (req, res, next) {
  res.send('<h3>Anyone with "user" role can get here, but guests cannot!</h3>')
});

module.exports = router;