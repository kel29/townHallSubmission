// FIREBASE METHODS
// Initialize Firebase

/* globals firebase */
if (process.env.NODE_ENV !== 'production') {
  console.log(`USING: ${process.env.PROJECT_ID}`);
}

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  storageBucket: process.env.STORAGE_BUCKET,
};

firebase.initializeApp(config);

const firebasedb = firebase.database();
const firebaseauth = firebase.auth();

export { firebase, firebasedb, firebaseauth };
