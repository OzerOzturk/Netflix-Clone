import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBH0P80wePam0vUCR-lY8UnyLTii96PdnY",
    authDomain: "netflix-clone-reactt.firebaseapp.com",
    projectId: "netflix-clone-reactt",
    storageBucket: "netflix-clone-reactt.appspot.com",
    messagingSenderId: "63896585442",
    appId: "1:63896585442:web:8dd1cf363c864d8170cabb"
};

const firebase = Firebase.initializeApp(config);


export {firebase};