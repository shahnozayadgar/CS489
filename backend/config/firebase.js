const admin = require("firebase-admin");

// Parse the service account key from an environment variable
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databasequiz-8aaf0-default-rtdb.firebaseio.com"
});

const db = admin.database();

// Optional: Use emulator during development
if (process.env.NODE_ENV === 'development') {
  process.env.FIREBASE_DATABASE_EMULATOR_HOST = 'localhost:9000';
}

module.exports = db;

