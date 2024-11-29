const fs = require("fs");
const path = require("path");

class mbtiDAO {
  static async getMBTIByType(type) {
    try {
      // read JSON file here, the one with the ethical mbti values
      const filePath = path.join(__dirname, "../data/dataMBTI.json");
      const rawData = fs.readFileSync(filePath, "utf8");
      const mbtiData = JSON.parse(rawData);

      // find MBTI by type giving the "mbti"
      const mbti = mbtiData.MBTI_Types.find((item) => item.type === type);
      return mbti || null; // Return null if not found
    } catch (error) {
      console.error("Error reading MBTI data:", error.message);
      throw new Error("Unable to retrieve MBTI data.");
    }
  }
}

module.exports = mbtiDAO;