const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const questionRoutes = require('./questionRoutes');
const answerRoutes = require('./answerRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);



module.exports = router;