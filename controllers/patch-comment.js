const Comment = require('../models/Comment');

const patchComment = async (req, res) => {
    try {
        await Comment.updateOne({
            _id: req.params.id
        }, {
            $set: {
                ...req.body
            }
        })
        res.json('Comment updated')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = patchComment