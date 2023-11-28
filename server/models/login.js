const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
})
LoginSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});
const login = mongoose.model('login', LoginSchema)
module.exports = login
