const News = require('../models/News');

const getAllNews = async (req, res) => {
    try {
        const newsList = await News.find();
        res.json(newsList)
    } catch (e) {
        console.log(e.message)
    }
}

const getOneNews = async (req, res) => {
    try {
        const newsPost = await News.findById({
            _id: req.params.id
        });
        res.json(newsPost)
    } catch (e) {
        console.log(e.message)
    }
}

const getCategoryNews = async (req, res) => {
    try {
        const newsList = await News.find({
            category: req.params.id
        });
        res.json(newsList)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    getAllNews,
    getOneNews,
    getCategoryNews
}