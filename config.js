var Sequelize = require('sequelize');

var env = "dev";
var config = require('./constants.json')[env];
var password = config.password ? config.password : null;

// initialize database connection
var sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    logging: console.log,
    define: {
      timestamps: false
    }
  }
  );

module.exports.sequelize = sequelize;