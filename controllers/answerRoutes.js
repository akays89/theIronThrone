
const questData = require('../seeds/answersData.json');
const withAuth = require('../utils/auth');
const { Answer, Question } = require('../models');
const router = require('express').Router();

 
router.get('/:id', async (req, res) => {
    try {
      const answer = await Answer.findByPk(req.params.id, {
          
      });
      // res.render('answers', {
      //   answer: answer,
      //   loggedIn: req.session.logged_in,
      // });
      res.status(200).json(answer);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;