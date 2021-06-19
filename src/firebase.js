import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAcvdh7mR364L0QVohtkKBybOXXPPidljM",
    authDomain: "books-e2853.firebaseapp.com",
    projectId: "books-e2853",
    storageBucket: "books-e2853.appspot.com",
    messagingSenderId: "577715316017",
    appId: "1:577715316017:web:f55452bbdad34724f23c10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;