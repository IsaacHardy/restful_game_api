const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/api');
});

router.get('/api', function(req, res) {
  res.send("Here is where I'd have documentation for my API.");
});

module.exports = router;
