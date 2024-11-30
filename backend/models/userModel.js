class User {
  //adding dropdown options as valid options 
  //will need to change this later!!!
  static validDegreeTypes = ["Bachelor", "Master", "PhD"];
  static validMajors = ["Computer Science"];
  static validGenders = ["Male", "Female", "Non-binary", "Prefer not to say"];
  static validMbti = ["I", "E", "N", "S", "T", "F", "J", "P"];

    constructor(userId, name, degreeType, major, gender, mbti = null) {
        this.userId = userId; //connect to questions
        this.name = name;
        this.degreeType = degreeType; // like bachelor etc
        this.major = major; // their department
        this.gender = gender; 
        this.mbti = mbti; 
    }
  
    // check if all required fields are present
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
        typeof this.gender === "string" &&
        this.validDegreeTypes.includes(this.degreeType) &&
        this.validMajors.includes(this.major) &&
        this.validGenders.includes(this.gender) &&
        this.validMbti.includes(this.mbti)
      );
  }

  static generateUserId(existingUserIds) {
      // Get the maximum existing user ID and increment by 1 for the new user
      const maxId = existingUserIds.length ? Math.max(...existingUserIds) : 0;
      return maxId + 1;
  }
}

module.exports = User;

