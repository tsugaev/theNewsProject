const { Router } = require('express');
const router = Router();
const methods = require('../controllers/index');

router.post('/news/:id/comment', methods.postComment);

router.get('/news/:id/comments', methods.getComments);

router.patch('/comment/:id', methods.patchComment);

router.delete('/comment/:id', methods.deleteComment)

module.exports = router