const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    date: {
        type: Date,
        default: Date.now()
    },
    news: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News'
    },
    name: String
})

module.exports = mongoose.model('Comment', commentSchema)