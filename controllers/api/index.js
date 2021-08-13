const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);

module.exports = router;