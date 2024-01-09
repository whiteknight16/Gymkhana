const express = require('express')
const router = express.Router()
const { getAllExercise, deleteExercise, updateExercise, createExercise } = require("../controller/exerciseList")


router.route("/").get(getAllExercise).patch(updateExercise).post(createExercise)
router.route("/:id").delete(deleteExercise)


module.exports = router