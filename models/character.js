const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model, {}
    

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    char_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     blurb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    char_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    img_link: {
        type: DataTypes.STRING,
        allowNull: false,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character",
  }
);

module.exports = Character;