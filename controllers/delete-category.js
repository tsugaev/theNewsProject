const Category = require('../models/Category');

const deleteCategory = async (req, res) => {
    try {
        await Category.deleteOne({
            _id: req.params.id
        })
        res.json('Category deleted')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = deleteCategory