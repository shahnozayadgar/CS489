// I wanted to see the values on google sheets directly

/*
const { google } = require('googleapis');
const firebaseAdmin = require('firebase-admin');
const path = require('path');

// Firebase setup
const serviceAccount = path.join(__dirname, 'path/to/your/firebase-credentials.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com', // Replace with your Firebase database URL
});

const db = firebaseAdmin.database();

// Google Sheets setup
const SPREADSHEET_ID = '1NDHp1E3HQd4v1cD7V_ft1ctnnEryY2D4CgRbuExVFq0'; // Correct Google Sheets ID

// Authenticate Google Sheets API
async function authenticateSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'path/to/your/serviceAccountKey.json'), // Path to Google credentials JSON
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return auth.getClient();
}

// Function to create and update Google Sheets with data from Firebase
async function updateGoogleSheet() {
  // Authenticate with Google Sheets
  const authClient = await authenticateSheets();
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  // Fetch Firebase data
  const snapshot = await db.ref('users').once('value');
  const usersData = snapshot.val(); // This gets all user data from Firebase

  // Format Firebase data into an array of arrays for Google Sheets
  const usersArray = [];
  usersArray.push(['User ID', 'Name', 'Degree Type', 'Major', 'Gender', 'MBTI']); // Headers
  for (const userId in usersData) {
    const user = usersData[userId];
    usersArray.push([
      userId, 
      user.name, 
      user.degreeType, 
      user.major, 
      user.gender, 
      user.mbti
    ]);
  }

  // Define the range and request body to update the Google Sheet
  const request = {
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A1',  // Specify your sheet name and range
    valueInputOption: 'RAW',
    resource: {
      values: usersArray, // Data to be inserted in the sheet
    },
  };

  // Call the Sheets API to update the Google Sheet
  try {
    await sheets.spreadsheets.values.update(request);
    console.log('Google Sheets updated successfully with Firebase data');
  } catch (error) {
    console.error('Error updating Google Sheets:', error);
  }
}

// Run the function to update Google Sheets
updateGoogleSheet();

*/
