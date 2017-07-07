'use strict';
module.exports = function(sequelize, DataTypes) {
  var n64Game = sequelize.define('n64Game', {
    name: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    doesOwn: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return n64Game;
};