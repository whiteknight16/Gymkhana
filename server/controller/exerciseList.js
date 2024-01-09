const ExerciseList = require("../models/exerciseList")

const getAllExercise = async (req, res) => {
    try {
        const exercise = await ExerciseList.find({})
        res.send({ exercise })
    } catch (error) {
        console.log(error)
    }
}

const updateExercise = async (req, res) => {
    try {
        const { id, name,
            level,
            reps,
            target,
            gif,
            video,
            cal } = req.body;
        const exercise = await ExerciseList.findOneAndUpdate({ _id: id }, { name, level, reps, target, gif, video, cal }, {
            new: true,
            runValidators: true,
        })
        if (!exercise) {
            return res.json("No heading with that id")
        }
        res.json({ exercise })

    } catch (error) {
        console.log(error)
    }
}

const createExercise = async (req, res) => {
    try {
        const exercise = await ExerciseList.create(req.body)
        res.json({ exercise })

    } catch (error) {
        res.json({ msg: error })
    }
}

const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const heading = await ExerciseList.findOneAndDelete({ _id: id })
        if (!heading) {
            return res.status(404).json({ msg: "No heading with given id " })
        }
        res.status(200).json({ heading })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllExercise, updateExercise, createExercise, deleteExercise }
