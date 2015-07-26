var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});

router.get('/welcome', function(req, res) {
  res.sendFile(path.join(__dirname,'welcome.html'));
});

router.get('/about-me', function(req, res) {
  res.sendFile(path.join(__dirname,'aboutme.html'));
});

router.get('/site-statistics', function(req, res) {
  res.sendFile(path.join(__dirname,'site-statistics.html'));
});

module.exports = router;