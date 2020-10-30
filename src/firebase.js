import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-RVXEWDxs7AhzozV7A-UtlHuczoBQv9o",
  authDomain: "challenge-62332.firebaseapp.com",
  databaseURL: "https://challenge-62332.firebaseio.com",
  projectId: "challenge-62332",
  storageBucket: "challenge-62332.appspot.com",
  messagingSenderId: "310100171500",
  appId: "1:310100171500:web:b3667a10a35fccd01923c9",
  measurementId: "G-DLL5GT78W6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
