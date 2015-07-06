var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.Ctrl');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res) {
  return standupCtrl.create(req, res);
});

module.exports = router;
