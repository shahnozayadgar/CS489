const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databasequiz-8aaf0-default-rtdb.firebaseio.com"
});

const db = admin.database();

if (process.env.NODE_ENV === 'development') {
  process.env.FIREBASE_DATABASE_EMULATOR_HOST = 'localhost:9000';
}

module.exports = db;