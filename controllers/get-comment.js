const Comment = require('../models/Comment');

const getNewsPostComment = async (req, res) => {
    try {
        const commentList = await Comment.find({
            news: req.params.id
        });
        res.json(commentList)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = getNewsPostComment