import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAqTAZVogMVnbpw_KYPig0le6ix7GNbK64",
  authDomain: "fun-food-friends-dc28b.firebaseapp.com",
  databaseURL: "https://fun-food-friends-dc28b.firebaseio.com",
  projectId: "fun-food-friends-dc28b",
  storageBucket: "",
  messagingSenderId: "307198015189",
  appId: "1:307198015189:web:91fc8533e70d802f"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;