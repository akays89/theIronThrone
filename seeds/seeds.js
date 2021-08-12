const sequelize = require('../config/connection');
const { User, Character } = require('../models');

const userData = require('./userData.json');
const charData = require('./charData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const characters = await Character.bulkCreate(charData, {
    individualHooks: false,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
