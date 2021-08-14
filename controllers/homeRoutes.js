const router = require('express').Router();
const { Character, User } = require('../models');
const withAuth = require('../utils/auth');
const questData = require('../seeds/questionsData.json');


router.get('/', async (req, res) => {
  try {
    const questions = questData.map((question) =>
      question.text
    );
    // console.log(questions);
    // res.render('questions', {
    //   questions,
    //   loggedIn: req.session.loggedIn,
    // });
  res.status(200).send("<h1>HI</h1>");
  } catch (err) {
 
    res.status(500).json(err);
  }
  
});

router.get('/:id', withAuth, (req, res) => {
  try {
    const id = req.params.question.id;
    const question = questData.find((question) => question.id === id);
    res.status(200).send(question);

    res.render('questions', {
      questions: questData,
      loggedIn: req.session.logged_in,
    });
    console.log(question);

  } catch (err) {
    res.status(500).json(err);
  }
});
  

// replace questions with homepage route
// router.get('/', async (req, res) => {
//   // try {
//   //   const userData = await User.findByPk(req.session.user_id, {
//   //     // attributes: { exclude: ['password'] },
//   //     // include: [{ model: Character }],
//   //   });

//     // const user = userData.get({ plain: true });

//     res.render('questions', {
      
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
// //   }
// // });

// router.get('/', withAuth, (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('login', withAuth, (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
