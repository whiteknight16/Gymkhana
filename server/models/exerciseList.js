const mongoose = require('mongoose')

const ExerciseListSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    level: {
        type: String,
    },
    reps: {
        type: String,
    },
    target: {
        type: String,
    },
    gif: {
        type: String,
    },
    video: {
        type: String,
    },
    cal: {
        type: String,
    },
})

const ExerciseList = mongoose.model('exerciselists', ExerciseListSchema)
module.exports = ExerciseList
