const express = require("express");
const MBTIDAO = require("../Dao/mbtiDAO");
const mbtiData = require('../data/dataMBTI.json'); 
const router = express.Router();

// route to get MBTI data by type
router.get("/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const mbti = await MBTIDAO.getMBTIByType(type);
    if (!mbti) {
      return res.status(404).json({ error: "MBTI type not found." });
    }
    res.json(mbti);
  } catch (error) {
    res.status(500).json({ error: "Error fetching MBTI data." });
  }
});

module.exports = router;
