const Sequelize = require('sequelize');
const db = require('../db');


const Card = db.define('card', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false
  },
  values: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  }
});


Card.beforeValidate(card => {
  if (!card.img){
    card.img = 'images/cardback.png'
  }
})

module.exports = Card
