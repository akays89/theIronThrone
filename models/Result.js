const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Result extends Model {}

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    result_char: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    } ,
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id'
      }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "result",
  }
);

module.exports = Result;