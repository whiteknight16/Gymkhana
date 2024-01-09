const mongoose = require('mongoose')

const ExerciseSubItemsSchema = new mongoose.Schema({
    parent: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        require: true,
    },
    level: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        require: true,
        max: 40,
        message: "Content cannot exceed 40 characters"
    },


})

const exerciseSubItems = mongoose.model('exerciseSubItems', ExerciseSubItemsSchema)
module.exports = exerciseSubItems
