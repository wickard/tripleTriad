const router = require('express').Router();
const { Card } = require('../db/models');

module.exports = router;

// GET api/cards
router.get('/', function (req, res, next) {
  Card.findAll()
    .then(cards => res.json(cards))
    .catch(next);
});

// GET /api/cards/:cardId
router.get('/:cardId', function (req, res, next) {
  Card.findById(req.params.cardId)
    .then(card => res.json(card))
    .catch(next);
});

