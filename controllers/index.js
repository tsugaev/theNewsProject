const postCategory = require('./post-category');
const getCategory = require('./get-category');
const deleteCategory = require('./delete-category');

const postNews = require('./post-news');
const getNews = require('./get-news');
const patchNews = require('./patch-news');
const deleteNews = require('./delete-news')

const postComment = require('./post-comment');
const getComments = require('./get-comment');
const patchComment = require('./patch-comment');
const deleteComment = require('./delete-comment');

module.exports = {
    postCategory,
    getCategory,
    deleteCategory,

    postNews,
    getNews,
    patchNews,
    deleteNews,

    postComment,
    getComments,
    patchComment,
    deleteComment
}