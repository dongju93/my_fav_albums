'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artists = sequelize.define('Artists', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    album: DataTypes.STRING,
    year: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Artists.associate = function(models) {
    // associations can be defined here
    Artists.belongsTo(models.User);
  };
  return Artists;
};