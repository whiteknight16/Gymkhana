const mongoose = require('mongoose')

const BlogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 40,
        message: "Title cannot exceed 40 characters"
    },
    image: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
        max: 900,
        message: "Content cannot exceed 900 characters"
    },


})

const blog = mongoose.model('blogs', BlogsSchema)
module.exports = blog
