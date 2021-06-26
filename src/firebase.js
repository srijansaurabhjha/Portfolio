import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAkln86cQKjexM009R9ILHkCFw4XCHNigk",
  authDomain: "chat-5c4d1.firebaseapp.com",
  projectId: "chat-5c4d1",
  storageBucket: "chat-5c4d1.appspot.com",
  messagingSenderId: "803015879398",
  appId: "1:803015879398:web:58178e09f6997584632927",
  measurementId: "G-BYGEF87Q0W"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
