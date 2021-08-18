const { User, Question, Answer } = require('../models');
const withAuth = require('../utils/auth');
const questData = require('../seeds/questionsData.json');
const router = require('express').Router();

router.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" 
  res.render('blank', { loggedIn: req.session.logged_in});
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
    // res.status(500).json(err);
  }
});


module.exports = router;
