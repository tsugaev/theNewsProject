const Comment = require('../models/Comment');

const deleteComment = async (req, res) => {
    try {
        await Comment.deleteOne({
            _id: req.params.id
        });
        res.json('Comment deleted')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = deleteComment