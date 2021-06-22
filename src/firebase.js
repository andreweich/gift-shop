import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyACuEIo5LWPnKIMO-calXJQPxgiPHYgjh0",
    authDomain: "gift-shop-2af83.firebaseapp.com",
    projectId: "gift-shop-2af83",
    storageBucket: "gift-shop-2af83.appspot.com",
    messagingSenderId: "612552505934",
    appId: "1:612552505934:web:0df4b775c96ab18e44211f",
    measurementId: "G-MY119DCC8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;