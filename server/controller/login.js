const login = require("../models/login")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new login({ username, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await login.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id }, process.env.KEY, {
            expiresIn: '10m',
        });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}




module.exports = { loginUser, addUser }