const express = require('express');
const router = express.Router();
const {questions} = require('../data');

//end point to get all scenarios and questions
router.get('/questions/:id', (req, res) => {
    const questionID = req.params.id;
    const question = questions.find((question)=> question.id === parseInt(questionID));
    if (!question) {
        return res.status(404).json({message: 'Question not found'});
    }
    res.json(question);
});
module.exports = router;