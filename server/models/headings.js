const mongoose = require('mongoose')

const HeadingsSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
})

const headings = mongoose.model('headings', HeadingsSchema)
module.exports = headings
