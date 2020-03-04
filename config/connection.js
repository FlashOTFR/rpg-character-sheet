const Sequelize = require('sequelize');

module.exports = new Sequelize('characters_db', 'root', '5eku+aya', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false;

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

