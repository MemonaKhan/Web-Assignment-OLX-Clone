import * as firebase from 'firebase/app';
// import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';  

var firebaseConfig = {
    apiKey: "AIzaSyCp8fPEeep56mx5LNXdOuykEo-PlUZE3Xk",
    authDomain: "olx-clone-ce3ad.firebaseapp.com",
    databaseURL: "https://olx-clone-ce3ad.firebaseio.com",
    projectId: "olx-clone-ce3ad",
    storageBucket: "olx-clone-ce3ad.appspot.com",
    messagingSenderId: "508749475995",
    appId: "1:508749475995:web:336864ffe3a2cbe641d63e",
    measurementId: "G-VR6NEL9VQ0"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);