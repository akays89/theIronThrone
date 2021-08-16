const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Answer extends Model {} 

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'question',
            key: 'id'
        }
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "answer",
  }
);

module.exports = Answer;