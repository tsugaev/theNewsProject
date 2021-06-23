const { Router } = require('express');
const router = Router();
const methods = require('../controllers/index');

router.post('/category/:id/news', methods.postNews);

router.get('/news', methods.getNews.getAllNews);
router.get('/home', methods.getNews.getAllNews);
router.get('/news/:id', methods.getNews.getOneNews);
router.get('/category/:id/news', methods.getNews.getCategoryNews);

router.patch('/news/:id', methods.patchNews);

router.delete('/news/:id', methods.deleteNews)

module.exports = router