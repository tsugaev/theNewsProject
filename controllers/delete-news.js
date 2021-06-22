const News = require('../models/News');

const deleteNews = async (req, res) => {
    try {
        await News.deleteOne({
            _id: req.params.id
        });
        res.json('News post deleted')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = deleteNews