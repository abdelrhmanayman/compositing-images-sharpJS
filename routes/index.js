const router = require('express').Router();
const imagesRoutes = require('./imageRoutes');

router.use('/api/images', imagesRoutes);

module.exports = router;