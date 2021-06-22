const Category = require('../models/Category');

const postCategory = async (req, res) => {
    try {
        const newCategory = await new Category({
            name: req.body.name
        })
        newCategory.save();
        res.json('Category added: ' + newCategory)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = postCategory