const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databasequiz-8aaf0-default-rtdb.firebaseio.com/" // Our database URL
});

const db = admin.database();

// Function to test writing data
async function testWrite() {
  const ref = db.ref('users/1'); // Write to 'users/1'
  
  const userData = {
    userId: 1,
    name: "John Doe",
    degreeType: "Bachelor's",
    major: "Computer Science",
    gender: "Male",
    mbti: "INTP"
  };

  await ref.set(userData);
  console.log("Data written to Firebase:", userData);
}

// Function to test reading data
async function testRead() {
  const ref = db.ref('users/1'); // Read from 'users/1'
  
  ref.once("value", (snapshot) => {
    const data = snapshot.val();
    console.log("Data read from Firebase:", data);
  });
}

// Run tests
async function runTests() {
  try {
    await testWrite();  // Test writing data
    await testRead();   // Test reading data
  } catch (error) {
    console.error("Error during tests:", error);
  }
}

runTests();