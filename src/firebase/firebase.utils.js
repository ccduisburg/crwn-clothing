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
  appId: "1:358622153387:web:95d16ac2547b22708b45ee"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // const collectionRef=firestore.collection('users');
  //  const collectionSnapshot=await collectionRef.get();
  //  console.log({collection:collectionSnapshot.docs.map(doc=>doc.data())});
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createtedAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createtedAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
    console.log(newDocRef);

  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const tarnsformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  })
  return tarnsformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
