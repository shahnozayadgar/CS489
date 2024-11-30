const db = require("../config/firebase");
const User = require("../models/UserModel");

class UserDAO {
  // The function to create a new user in the Firebase database
  static async createUser(user) {
    try {
      // Get existing users in the database
      const snapshot = await db.ref("users").once("value");
      const existingUsers = snapshot.val() || {}; // If no users, default to an empty object
  
      // Map over the existing users to extract the user IDs
      const existingUserIds = Object.keys(existingUsers); // Keys of "users" represent the user IDs
      console.log("Existing User IDs:", existingUserIds);  // Debugging: log existing user IDs
  
      // Generate new user ID
      const newUserId = User.generateUserId(existingUserIds);
      console.log("Generated New User ID:", newUserId); // Debugging: log the new user ID
  
      // Create new User instance with the generated ID
      const newUser = new User(newUserId, user.name, user.degreeType, user.major, user.gender, user.mbti);
      
      // Verify that all fields are present before attempting to save
      if (!newUser.isValid()) {
        throw new Error('Invalid user data');
      }
  
      // Debugging: log the new user data to ensure everything is set correctly
      console.log("New User Data to Save:", newUser);
  
      // Save the new user to Firebase under the users node
      await db.ref(`users/${newUserId}`).set({
        userId: newUser.userId, // Ensure 'userId' is correctly passed here
        name: newUser.name,
        degreeType: newUser.degreeType,
        major: newUser.major,
        gender: newUser.gender,
        mbti: newUser.mbti,
      });
  
      console.log("User created successfully:", newUser); // Debugging: log new user details
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  }  
  
}

module.exports = UserDAO;
