const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food', 'root', 'N!ck3541', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;