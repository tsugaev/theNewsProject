const News = require('../models/News');

const getAllNews = async (req, res) => {
    try {
        const newsList = await News.find().lean();

        res.render('home', {
            news: newsList});
        // res.json(newsList)
    } catch (e) {
        console.log(e.message)
    }
}

const getOneNews = async (req, res) => {
    try {
        const newsPost = await News.findById(req.params.id);
        res.render('newsPost', newsPost);
        // res.json(newsPost)
    } catch (e) {
        console.log(e.message)
    }
}

const getCategoryNews = async (req, res) => {
    try {
        const newsList = await News.find({
            category: req.params.id
        }).lean();
        res.render('categoryNews', {
            news: newsList
        })
        // res.json(newsList)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    getAllNews,
    getOneNews,
    getCategoryNews
}