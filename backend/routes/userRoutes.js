const express = require("express");
const UserDAO = require("../Dao/userDAO");
const router = express.Router();

// Route to create a new user
router.post("/create", async (req, res) => {
  const userData = req.body;

  try {
    if (!userData.name || !userData.degreeType || !userData.major || !userData.gender) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newUser = await UserDAO.createUser(userData);
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user." });
  }
});

// Route to get a user by ID   -  I guess we only need this for testing
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserDAO.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user." });
  }
});

module.exports = router;
