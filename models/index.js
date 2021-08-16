const User = require('./User');
const Character = require('./Character');
const Result = require('./Result');
const Question = require('./Question');
const Answer = require('./Answer');

User.hasMany(Result, {
  foreignKey: 'user_id'
});

Result.belongsTo(User, {
    foreignKey: 'user_id'
});

Character.hasMany(Result, {
    foreignKey: 'character_id'
});

Result.hasOne(Character, {
  as: 'Current',
  foreignKey: 'character_id',
  constraints: false
});

Question.hasMany(Answer, {
  foreignKey: 'question_id',
});


module.exports = { User, Character, Result, Question, Answer };