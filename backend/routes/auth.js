const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {users} = require('../data');

console.log('JWT_SECRET:', process.env.JWT_SECRET);

//registering new users
router.post('/register', async (req, res) => {
    const {username, email, password } = req.body;
    //checking if user already exists 
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({message: 'user already exists'});
    }
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating a new user 
    const newUser = {
        id: users.length +1, //incrementing id by 1
        username, 
        email, 
        password: hashedPassword,
    };
    users.push(newUser); //add to in-memory storage

    console.log('User registered:', newUser);
    console.log('All registered users:', users);

    res.status(201).json({ message: 'user generated successfully', user: {id: newUser.id, username, email}});
});

//login route
router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    //validating input
    if (!email || !password) {
        return res.status(400).json({message: 'please provide email and password'});
    }
    //finding user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'user not found'});
    }
    console.log('User attempting to log in:', user);
    console.log('Password provided:', password);
    console.log('Stored hashed password:', user.password);
    //comparing password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('password match result:', isMatch);
    if (!isMatch) {
        return res.status(400).json({ message: 'invalid credentials'})
    }
    //generating JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
        message: 'login successful',
        token,
        user: {
            id: user.id, 
            username: user.username,
            email: user.email
        },
    });
});

module.exports = router;