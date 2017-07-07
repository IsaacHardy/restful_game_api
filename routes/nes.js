const express = require('express');
const router  = express.Router();
const models  = require('../models');

router.get('/', function(req, res) {
  res.send('Welcome to the NES route!');
});

router.get('/games', function(req, res) {
  models.nesGame.findAll()
    .then(function(games) {
      if (games) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(games);
      } else {
        res.send("No Games found...")
      }
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again.");
    });
});

router.get('/games/:id', function(req, res) {
  models.nesGame.findById(req.params.id)
    .then(function(game) {
      if (game) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(game);
      } else {
        res.status(404).send("Game not found.")
      }
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again.");
    });
});

router.post('/games/create', function(req, res) {
  req.checkBody("name", "Cannot be empty.").notEmpty();
  req.checkBody("releaseDate", "Cannot be empty.").notEmpty();
  req.checkBody("rating", "Cannot be empty.").notEmpty();
  req.checkBody("doesOwn", "Cannot be empty.").notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    res.status(400).send("No good. Retry.")
  } else {
    models.nesGame.create({
      name: req.body.name,
      releaseDate: req.body.releaseDate,
      rating: req.body.rating,
      doesOwn: req.body.doesOwn
    }).then(function(game) {
      if (game) {
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(game);
      } else {
        res.status(403).send("No Game found...");
      }
    }).catch(function(err) {
      res.status(400).send("Bad request. Please try again.");
    })
  }
});

router.put('/games/:id', function(req, res) {
  models.nesGame.update({
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    rating: req.body.rating,
    doesOwn: req.body.doesOwn
  }, { where: {
      id: req.params.id
    }
  }).then(function(game) {
    if (game) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(game);
    } else {
      res.status(403).send("No Game found...");
    }
  }).catch(function(err) {
    res.status(400).send("Bad request. Please try again.");
  });
});

router.delete('/games/:id', function(req, res) {
  models.nesGame.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(game) {
    if (game) {
      res.status(200).send("Successfully removed game.");
    } else {
      res.status(404).send("Game not found.");
    }
  }).catch(function(err) {
    res.status(400).send("Bad request. Please try again.");
  })
});

module.exports = router;
