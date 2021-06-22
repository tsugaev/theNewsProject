const { Router } = require('express');
const router = Router();
const categoryRoutes = require('./categoryRoutes');
const newsRoutes = require('./newsRoutes');
const commentRoutes = require('./commentRoutes')

router.use(categoryRoutes);
router.use(newsRoutes);
router.use(commentRoutes)



module.exports = router