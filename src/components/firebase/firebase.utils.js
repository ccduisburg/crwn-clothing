import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBHw5Z2OorXsDFz3m5OpTrzpd_OremVpY4",
  authDomain: "crwn-db-8cfde.firebaseapp.com",
  databaseURL: "https://crwn-db-8cfde.firebaseio.com",
  projectId: "crwn-db-8cfde",
  storageBucket: "crwn-db-8cfde.appspot.com",
  messagingSenderId: "358622153387",
  appId: "1:358622153387:web:95d16ac2547b22708b45ee",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
