//Dependencies
const Sequelize = require('sequelize');


//Exported Database Connection
module.exports = new Sequelize('character_db', 'root', '5eku+aya', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

