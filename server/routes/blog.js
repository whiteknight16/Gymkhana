const express = require('express')
const router = express.Router()
const { getAllBlogs, updateBlog, deleteBlog, createBlog } = require("../controller/blog")


router.route("/").get(getAllBlogs).post(createBlog).patch(updateBlog)
router.route("/:id").delete(deleteBlog)

module.exports = router