const HeadingsList = require("../models/headings")

const getAllHeadings = async (req, res) => {
    try {
        const heading = await HeadingsList.find({})
        res.send({ heading })
    } catch (error) {
        console.log(error)
    }
}

const updateHeading = async (req, res) => {
    try {
        const { id, heading } = req.body;
        const headings = await HeadingsList.findOneAndUpdate({ _id: id }, { heading }, {
            new: true,
            runValidators: true,
        })
        if (!heading) {
            return res.json("No heading with that id")
        }
        res.json({ headings })

    } catch (error) {
        console.log(error)
    }
}

const createHeading = async (req, res) => {
    try {
        const heading = await HeadingsList.create(req.body)
        res.json({ heading })

    } catch (error) {
        res.json({ msg: error })
    }
}

const deleteHeading = async (req, res) => {
    try {
        const { id } = req.params;
        const heading = await HeadingsList.findOneAndDelete({ _id: id })
        if (!heading) {
            return res.status(404).json({ msg: "No heading with given id " })
        }
        res.status(200).json({ heading })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllHeadings, updateHeading, createHeading, deleteHeading }
