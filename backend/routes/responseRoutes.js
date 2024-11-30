const express = require("express");
const ResponseDAO = require("../Dao/responseDAO");
const {calculateMBTIType} = require("../utils/mbtiCalculator");

const router = express.Router();

//this saves each individual answer as the user progresses
router.post("/update", async (req, res) => {
  const { userId, questionId, answerValue } = req.body;

  try {
    const message = await ResponseDAO.updateAnswer(userId, questionId, answerValue);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to update response: " + error });
  }
});

//adding new route for test submission
router.post("/submit-test", async(req, res) => {
  const {userId} = req.body;
  try{
    //getting all answers for this user
    const userAnswers = await ResponseDAO.getResponse(userId);
    //formatting answer for calculation 
    const formattedAnswers = Object.entries(userAnswers).map(([questionId, answerValue]) => ({
      questionId: parseInt(questionId),
      answerValue
    }));
    //checking if we have all answers
    if (formattedAnswers.length !== 12) {
      return res.status(400).json({
        error: "all 12 questions must be answered"
      });
    }

    //calculating mbti type
    const result  = calculateMBTIType(formattedAnswers);
    //saving final result
    await ResponseDAO.saveTestResult(userId, formattedAnswers, result);

    //return result 
    res.json({
      userId,
      mbtiType: result.type,
      scores: result.scores
    });
  } catch (error) {
    res.status(500).json({
      error: "failed to process test submission: " + error
    });
  }
});

module.exports = router;