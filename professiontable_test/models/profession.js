module.exports = function(sequelize, DataTypes) {
// Creates a table "profession" in our network database
  var Profession = sequelize.define("professions", {
    // LIST OF COLUMNS //
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    } 
  });
  return Profession;
};