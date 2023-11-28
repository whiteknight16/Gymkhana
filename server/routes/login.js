const express = require('express')
const router = express.Router()
const { addUser, loginUser } = require("../controller/login")

router.route("/reg").post(addUser)
router.route("/login").post(loginUser)
module.exports = router