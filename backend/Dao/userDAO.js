const db = require("../config/firebase");
const User = require("../models/UserModel");

class UserDAO {
  static async createUser(user) {

    // get existing users in the database
    const snapshot = await db.ref("users").once("value");
    const existingUsers = snapshot.val() || {};
    const existingUserIds = Object.values(existingUsers).map(u => u.userId);

    const newUserId = User.generateUserId(existingUserIds); //new user id

    const newUser = new User(newUserId, user.name, user.degreeType, user.major, user.gender, user.mbti);

    await db.ref(`users/${newUserId}`).set({
      userId: newUser.userId,
      name: newUser.name,
      degreeType: newUser.degreeType,
      major: newUser.major,
      gender: newUser.gender,
      mbti: newUser.mbti,
    });

    return newUser; // Return the created user, save this in a global variable in the front end to keep adding the new responses to this ID
  }

  static async getUserById(userId) {  //function to get user info from the id
    const snapshot = await db.ref(`users/${userId}`).once("value");
    return snapshot.val();
  }
}

module.exports = UserDAO;
