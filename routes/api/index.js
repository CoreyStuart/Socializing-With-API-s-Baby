const router = require('express').Router();
const appRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', appRoutes);
router.use('/users', userRoutes);

module.exports = router;
