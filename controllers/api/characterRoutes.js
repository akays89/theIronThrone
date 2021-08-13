const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// GET one result for quiz
router.get('/results/:id', async (req, res) => {
  try {
    const charResults = await Character.findByPk(req.params.id, {
      include: [
        {
          model: Character,
          attributes: ['id','char_name', 'blurb', 'img_link'],
        },
      ],
    });
    const result = charResults.get({ plain: true });
    res.render('results', { result, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});









//     const results = charResults.map((result) =>
//       result.get({ plain: true })
//     );
//     res.render('results', {
//       ...results,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });