const express = require("express");
const ResponseDAO = require("../Dao/responseDAO");
const {calculateMBTIType} = require("../utils/mbtiCalculator");
const mbtiData = require("../data/dataMBTI.json");

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
    const userAnswers = await ResponseDAO.getResponse(userId);
    
    const formattedAnswers = Object.entries(userAnswers)
      .filter(([key]) => key.startsWith('q'))
      .map(([questionId, answerValue]) => ({
        questionId: parseInt(questionId.substring(1)),
        answerValue
      }));

    if (formattedAnswers.length !== 12) {
      return res.status(400).json({
        error: "all 12 questions must be answered"
      });
    }

    const result = calculateMBTIType(formattedAnswers);
    const personalityDetails = mbtiData.MBTI_Types.find(type => type.type === result.type);
    
    await ResponseDAO.saveTestResult(userId, formattedAnswers, {
      scores: result.scores,
      ...personalityDetails
    });

    // Clean response without duplicates
    res.json({
      userId,
      scores: result.scores,
      ...personalityDetails  // This includes type, title, description, and picture
    });
  } catch (error) {
    res.status(500).json({
      error: "failed to process test submission: " + error
    });
  }
});

//temporary debugging
router.get("/check/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userAnswers = await ResponseDAO.getResponse(userId);
    res.json({ userAnswers });
  } catch (error) {
    res.status(500).json({ error: "Failed to get responses: " + error });
  }
});

module.exports = router;