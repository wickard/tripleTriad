const router = require('express').Router();
const { User, Card } = require('../db/models');

module.exports = router;

// GET api/users
router.get('/', function (req, res, next) {
  console.log(User)
  User.findAll({include: [ Card ]})
    .then(users => res.json(users))
    .catch(next);
});

// GET /api/users/:userId
router.get('/:userId', function (req, res, next) {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});
