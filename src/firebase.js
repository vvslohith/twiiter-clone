import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUzMXyDrp7E46WtCcjb4F7WFknm-vaYVs",
  authDomain: "twitter-clone-79465.firebaseapp.com",
  projectId: "twitter-clone-79465",
  storageBucket: "twitter-clone-79465.appspot.com",
  messagingSenderId: "481744179217",
  appId: "1:481744179217:web:dfdeab3f8ad32cf1a061b0",
  measurementId: "G-0555WRYRXN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
