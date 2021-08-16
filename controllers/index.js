const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/questions', questionRoutes);



module.exports = router;