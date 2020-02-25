'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    album: DataTypes.STRING,
    year: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    Artist.belongsTo(models.User);
  };
  return Artist;
};