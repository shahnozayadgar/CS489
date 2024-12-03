class User {
  constructor(userId, name, degreeType, major, gender, mbti = null) {
    this.userId = userId; // Connect to questions
    this.name = name;
    this.degreeType = degreeType; // Like Bachelor, etc.
    this.major = major; // Their department
    this.gender = gender;
    this.mbti = mbti;
  }

  // Check if all required fields are present (non-empty)
  isValid() {
    return (
      this.userId &&
      this.name &&
      this.degreeType &&
      this.major &&
      this.gender &&
      typeof this.name === "string" &&
      typeof this.degreeType === "string" &&
      typeof this.major === "string" &&
      typeof this.gender === "string"
    );
  }

  static generateUserId(existingUserIds) {
    // Get the maximum existing user ID and increment by 1 for the new user
    const maxId = existingUserIds.length ? Math.max(...existingUserIds) : 0;
    return maxId + 1;
  }
}

module.exports = User;


