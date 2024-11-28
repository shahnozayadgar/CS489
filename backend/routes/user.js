const express = require('express');
const router = express.Router();
const UserDAO = require('../Dao/userDAO');

//creating a new user
router.post('/', async (req, res) => {
    try {
        const newData = {
            name: req.body.name,
            degreeType: req.body.degreeType,
            major: req.body.major,
            gender: req.body.gender,
            mbti: req.body.mbti
        };
        const newUser = await UserDAO.createUser(newData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('error creating a user', error);
        res.status(500).json({message: 'error creating a user', error: error.message});
    }
});

//getting a user by their id
router.get('/:userId', async (req, res) => {
    try {
        const user = await UserDAO.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({message: 'user is not found'});
        }
        res.json(user);
    } catch (error) {
        console.error('error fetching user:', error);
        res.status(500).json({message: 'error fetching user', error: error.message});
    }
});

module.exports = router;