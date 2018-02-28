module.exports = function(sequelize, DataTypes) {

    // Creates a table "profession" in our network database
      var Profession = sequelize.define("Profession", {
  
        // LIST OF COLUMNS //
        //Category is a string type, cannot be null, and validates for length
        category: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 160]
          }
        }, 
       
      });

      Profession.associate = function (models) {
        Profession.belongsToMany(models.User, {
          through:  'user_profession'
        });
      };

      return Profession;
    };