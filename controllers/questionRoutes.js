const questData = require('../seeds/questionsData.json');
const router = require('express').Router();

// Pulls just the first question
const quest1 = questData[0].text;
// Pulls first answer
const answer = questData[0].responses[0].answer;
// Pulls the first answer's value
const answerValue = questData[0].responses[0].value;

const responses = [];


// Pulls each question and the list of answers
// for (let i = 0; i < questData.length; i++) {
//     const questions = questData[i].text;
//     console.log(questions);

//     for (let t = 0; t < questData[i].responses.length; t++) {
//         const answers = questData[i].responses[t].answer;
//         console.log(answers);
//     }
//     return;
// };

// GET questions
// router.get('/', async (req, res) => {
//     try {
  
//       const questions = questData.map((question) =>
//         question.get({ plain: true })
//       );
//       res.render('questions', {
//         questions,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//     console.log(questions);
//   });
