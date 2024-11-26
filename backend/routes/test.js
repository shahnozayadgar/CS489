const express = require('express');
const router = express.Router();
const {questions} = require('../data');

//end point to get all scenarios and questions
router.get('/questions', (req, res) => {
    res.json(questions);
});
module.exports = router;