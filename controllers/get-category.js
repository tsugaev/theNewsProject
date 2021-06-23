const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
    try {
        const categoriesList = await Category.find();
        res.render(categoriesList)
    } catch (e) {
        console.log(e.message)
    }
}

const getOneCategory = async (req, res) => {
    try {
        const category = await Category.findById({
            _id: req.params.id
        })
        res.json(category)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    getAllCategories,
    getOneCategory
}