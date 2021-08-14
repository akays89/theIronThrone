const router = require('express').Router();
const { Character, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {

    const questions = questData.map((question) =>
      question.get({ plain: true })
    );
    res.render('questions', {
      questions,
      loggedIn: req.session.loggedIn,
    });
  
  } catch (err) {
 
    res.status(500).json(err);
  }
  // console.log(questions);
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
//   }
// });

router.get('/', withAuth, (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('login', withAuth, (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
