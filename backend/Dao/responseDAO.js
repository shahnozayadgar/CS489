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
          resolve(snapshot.val());
        } else {
          reject("No responses found for this user.");
        }
      });
    });
  }

  // Update a single question answer
  static updateAnswer(user_id, question_id, answer_value) {
    return new Promise((resolve, reject) => {
      const ref = db.ref(`responses/${user_id}/q${question_id}`);
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
        // Save MBTI result in a separate table
        const mbtiResultRef = db.ref(`MBTI_result/${user_id}/result`);
        const mbtiData = {
            mbtiType: result.type,
            scores: result.scores
        };

        mbtiResultRef.set(mbtiData, (error) => {
            if (error) {
                reject("Error saving MBTI result: " + error);
            } else {
                resolve("MBTI result saved successfully");
            }
        });
    });
  }
}

module.exports = ResponseDAO;
