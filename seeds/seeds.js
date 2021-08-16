const sequelize = require('../config/connection');
const { User, Character, Result, Question, Answer } = require('../models');

const userData = require('./userData.json');
const charData = require('./charData.json');
const resultsData = require('./resultsData.json');
const questionsData = require('./questionsData.json');
const answersData = require('./answersData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const seedUsers = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const seedCharacters = await Character.bulkCreate(charData, {
    individualHooks: false,
    returning: true,
  });

  const seedResults = await Result.bulkCreate(resultsData, {
    individualHooks: false,
    returning: true,
  });

  const seedQuestions = await Question.bulkCreate(questionsData, {
    individualHooks: false,
    returning: true,
  });

  const seedAnswers = await Answer.bulkCreate(answersData, {
    individualHooks: false,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
