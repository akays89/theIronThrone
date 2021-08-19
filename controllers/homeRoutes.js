const { response } = require('express');
const { Question, Answer, Character, Result, User } = require('../models');
//const withAuth = require('../utils/auth');
//const questData = require('../seeds/questionsData.json');
const { init } = require('../models/User');
const router = require('express').Router();


router.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" 
  res.render('blank', { loggedIn: req.session.logged_in});
  });

  router.get('/questions/results', (req, res) => {
    //Serves the body of the page aka "main.handlebars" 
    res.render('next', { loggedIn: req.session.logged_in});
    });

// This route works! yay. 
// I had to remove the withAuth for insomnia and put in async await. 
router.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id, {
        include: [Answer]
    });
    const rawQuestion = JSON.parse(JSON.stringify(question));
    res.render('questions', {
      ...rawQuestion,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// write an if statement using event.submitter to capture the user and value of the form
// and saves it to local storage as a string
// TODO fix router post 'questions/1' route
router.post('/questions/:id', (req, res) => {
        try {
        Result.create({
          result_char: stringify(winner.value),
          user_id: { user: { id: user } },
          character_id: {Character: {id: Character.findOne({result_char: winner.value}).id}}
        }).then(() => {res.redirect('/results')});
        localStorage.clear();
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
    }
);


router.get('/results/:id', async (req, res) => {
  try {
    const characterRes = await Character.findByPk(req.params.id, {
        // include: [Result]
    });
    const rawCharacter = JSON.parse(JSON.stringify(characterRes));
    res.render('results', {
      ...rawCharacter,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const result = await Result.findAll({
        attributes: [
          'user_id',
          'result_char',
          'character_id',
        ],
        include: [
          {
            model: User,
            attributes: ['user']
          },
          {
            model: Character,
            as: 'Current',
            attributes: ['char_name']
          }
        ]
    });
    const rawResult = await JSON.parse(JSON.stringify(result));
    res.render('leaderboard', {
      ...rawResult,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});






module.exports = router;

