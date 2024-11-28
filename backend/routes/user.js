const express = require('express');
const router = express.Router();
const UserDAO = require('../Dao/userDAO');

//endpoint to get dropdown options 
router.get('/options', async (req, res) => {
    res.json({
        degreeTypes: User.validDegreeTypes, 
        majors: User.validMajors,
        genders: User.validGenders,
        mbti: User.validMbti,
    });
});

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
        // Validate the input values against allowed options
        if (!User.validDegreeTypes.includes(newData.degreeType)) {
            return res.status(400).json({ message: 'Invalid degree type' });
        }
        if (!User.validMajors.includes(newData.major)) {
            return res.status(400).json({ message: 'Invalid major' });
        }
        if (!User.validGenders.includes(newData.gender)) {
            return res.status(400).json({ message: 'Invalid gender' });
        }
        if (!User.validMbti.includes(newData.mbti)) {
            return res.status(400).json({ message: 'Invalid MBTI' });
        }
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