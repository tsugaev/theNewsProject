const { Router } = require('express');
const router = Router();
const methods = require('../controllers/index')

router.get('/categories', methods.getCategory.getAllCategories);

router.get('/category/:id', methods.getCategory.getOneCategory);

router.post('/category', methods.postCategory);

router.delete('/category/:id', methods.deleteCategory)

module.exports = router