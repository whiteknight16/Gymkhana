const express = require('express')
const router = express.Router()
const { getAllHeadings, updateHeading, createHeading, deleteHeading } = require("../controller/headings")


router.route("/").get(getAllHeadings).patch(updateHeading).post(createHeading)
router.route("/:id").delete(deleteHeading)


module.exports = router