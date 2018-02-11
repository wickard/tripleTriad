const User = require('./user');
const Card = require('./card');

Card.belongsToMany(User, {through: 'binder'});
User.belongsToMany(Card, {through: 'binder'});


module.exports = {
  User,
  Card
};
