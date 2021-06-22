const Comment = require('../models/Comment');

const postComment = async (req, res) => {
    try {
        const newComment = await new Comment({
            text: req.body.text,
            news: req.params.id,
            name: req.body.name
        });
        newComment.save();
        res.json('Comment added')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = postComment