const News = require('../models/News');

const postNews = async (req, res) => {
    try {
        const newNews = await new News({
            title: req.body.title,
            text: req.body.text,
            category: req.params.id,
            img: req.body.img
        })
        newNews.save();
        res.json('News post added: ' + newNews)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = postNews