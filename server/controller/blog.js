const BlogList = require("../models/blog")

const getAllBlogs = async (req, res) => {
    try {
        const blog = await BlogList.find({})
        res.send({ blog })
    } catch (error) {
        console.log(error)
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id, title, image, content } = req.body;
        const blog = await BlogList.findOneAndUpdate({ _id: id }, { title, image, content }, {
            new: true,
            runValidators: true,
        })
        if (!blog) {
            return res.json("No blog with that id")
        }
        res.json({ blog })

    } catch (error) {
        console.log(error)
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await BlogList.findOneAndDelete({ _id: id })
        if (!blog) {
            return res.status(404).json({ msg: "No blog with given id " })
        }
        res.status(200).json({ blog })
    } catch (error) {
        console.log(error)
    }
}

const createBlog = async (req, res) => {
    try {
        const blog = await BlogList.create(req.body)
        res.json({ blog })

    } catch (error) {
        res.json({ msg: error })
    }
}
module.exports = { getAllBlogs, updateBlog, deleteBlog, createBlog }