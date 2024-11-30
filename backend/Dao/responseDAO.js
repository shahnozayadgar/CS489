const { response } = require("express");
const db = require("../config/firebase"); 
const Response = require("../models/responseModel");

class ResponseDAO {

  // Retrieve a user's responses  --> This will be called and needed when we make the 
  static getResponse(user_id) {
    return new Promise((resolve, reject) => {
      const ref = db.ref(`responses/${user_id}`);
      ref.once('value', (snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val()); // Return the responses
        } else {
          reject("No responses found for this user.");
        }
      });
    });
  }

  // Update a single question answer
  static updateAnswer(user_id, question_id, answer_value) {
    return new Promise((resolve, reject) => {
      //saving to firebase: responses/user123/1 =2
      const ref = db.ref(`responses/${user_id}/${question_id}`);
      ref.set(answer_value, (error) => {
        if (error) {
          reject("Error updating answer: " + error);
        } else {
          resolve("Answer updated successfully.");
        }
      });
    });
  }

  //adding new method for saving test result 
  static saveTestResult(user_id, answers, result) {
    return new Promise((resolve, reject) => {
      const timestamp = new Date().toISOString();
      const resultRef = db.ref(`test_results/${user_id}/${timestamp}`);

      const testData = {
        answers, 
        mbtiType: result.type,
        scores: result.scores,
        timestamp
      };
      resultRef.set(testData, (error) => {
        if (error) {
          reject("error saving test result: " + error);
        } else {
          const responseRef = db.ref(`responses/${user_id}`);
          responseRef.remove();
          resolve("test result saved successfully");
        }
      });
    });
  }
}

module.exports = ResponseDAO;
