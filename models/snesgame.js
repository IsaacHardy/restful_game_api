'use strict';
module.exports = function(sequelize, DataTypes) {
  var snesGame = sequelize.define('snesGame', {
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
  return snesGame;
};