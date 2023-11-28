const ExerciseList = require("../models/exerciseList")

const getAllExercise = async (req, res) => {
    try {
        const exercise = await ExerciseList.find({})
        res.send({ exercise })
    } catch (error) {
        console.log(error)
    }
}




module.exports = { getAllExercise }