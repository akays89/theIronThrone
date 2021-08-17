const { User, Question, Answer } = require('../models');
const withAuth = require('../utils/auth');
const questData = require('../seeds/questionsData.json');
const router = require('express').Router();


// TEST: Get all questions for homepage
// This doesn't work
router.get('/', async (req, res) => {
  try {
    const questData = await Question.findAll({
        include: [Answer],
    });

    const questions = questData.map((question) =>
    question.get({ plain: true })
    );
    res.render('questions', {
      questions,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
