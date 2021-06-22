const News = require('../models/News');

const patchNews = async (req, res) => {
    try {
        await News.updateOne({
            _id: req.params.id
        }, {
            $set: {
                ...req.body
            }
        })
        res.json('News post updated')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = patchNews