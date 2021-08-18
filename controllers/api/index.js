const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const characterRoutes = require('./characterRoutes.js');


router.use('/users', userRoutes);
router.use('/character', characterRoutes);

module.exports = router;