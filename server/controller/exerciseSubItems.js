const exerciseSubItems = require('../models/exerciseSubItems')

const createExerciseSubItems = async (req, res) => {
    try {
        const exerciseSubItem = await exerciseSubItems.create(req.body)
        res.json({ exerciseSubItem })

    } catch (error) {
        res.json({ msg: error })
    }
}

const getExerciseSubItems = async (req, res) => {
    try {
        const exerciseSubItem = await exerciseSubItems.find()
        res.json({ exerciseSubItem })

    } catch (error) {
        res.json({ msg: error })
    }
}


const deleteSubItems = async (req, res) => {
    try {
        const { id } = req.params;
        const subItems = await exerciseSubItems.findOneAndDelete({ _id: id })
        if (!subItems) {
            return res.status(404).json({ msg: "No heading with given id " })
        }
        res.status(200).json({ subItems })
    } catch (error) {
        console.log(error)
    }
}


const updateExerciseSubItems = async (req, res) => {
    try {
        const { id, parent, target, image, text, level, about, } = req.body;
        const subItems = await exerciseSubItems.findOneAndUpdate({ _id: id }, { parent, target, image, text, level, about }, {
            new: true,
            runValidators: true,
        })
        if (!subItems) {
            return res.json("No item with that id")
        }
        res.json({ subItems })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { createExerciseSubItems, getExerciseSubItems, deleteSubItems, updateExerciseSubItems }