const express = require('express')
const router = express.Router()
const { getAllExercise } = require("../controller/exerciseList")


router.route("/").get(getAllExercise)

module.exports = router