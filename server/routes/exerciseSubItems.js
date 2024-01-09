const express = require('express')
const router = express.Router()
const { createExerciseSubItems, getExerciseSubItems, deleteSubItems, updateExerciseSubItems } = require("../controller/exerciseSubItems")


router.route("/").post(createExerciseSubItems).get(getExerciseSubItems).patch(updateExerciseSubItems)
router.route("/:id").delete(deleteSubItems)
module.exports = router