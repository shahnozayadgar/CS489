const express = require("express");
const ResponseDAO = require("../Dao/responseDAO");

const router = express.Router();

router.post("/update", async (req, res) => {
  const { userId, questionId, answerValue } = req.body;

  try {
    const message = await ResponseDAO.updateAnswer(userId, questionId, answerValue);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to update response: " + error });
  }
});

module.exports = router;