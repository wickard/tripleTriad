const Sequelize = require('sequelize');
const db = require('../db');


module.exports = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  wins: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  losses: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

