const questData = require('../seeds/questionsData.json');
const withAuth = require('../utils/auth');
const { Question, Answer } = require('../models');
const router = require('express').Router();

// // This route works! yay. 
// // I had to remove the withAuth for insomnia and put in async await. 
// router.get('/:id', async (req, res) => {
//     try {
//       const question = await Question.findByPk(req.params.id, {
//           // include: [Answer],
//       });
//       // res.render('questions', {
//       //   question: question,
//       //   loggedIn: req.session.logged_in,
//       // });
//       res.status(200).json(question);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

module.exports = router;
