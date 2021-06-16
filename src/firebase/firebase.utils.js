import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA3Y2BLSoYvdZszt79-Lr28dHyA8QGvPaI',
  authDomain: 'crawn-db-717db.firebaseapp.com',
  projectId: 'crawn-db-717db',
  storageBucket: 'crawn-db-717db.appspot.com',
  messagingSenderId: '450926896095',
  appId: '1:450926896095:web:f9b5cf5d7353fe680a5a6a',
  measurementId: 'G-5SEYPTR3FP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ setCustomParameters: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
