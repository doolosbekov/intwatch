/* Application Cores | Firebase Core */
import firebase from 'firebase';

/* Firebase, Firebase Application & Database Configuartion */
const firebaseConfig = {
     appId:        "1:844904930990:web:bc871c20c0ca590f28173f",
     apiKey:       "AIzaSyB89REyUr4jWgX5Z2AkV6HpFPh0fnt7OVg",
     projectId:    "intwatch-fcd65",
     authDomain:   "intwatch-fcd65.firebaseapp.com",
     databaseURL:  "https://intwatch-fcd65.firebaseio.com",     
     storageBucket:  "intwatch-fcd65.appspot.com",
     measurementId:  "G-ZPFECBBPX9",
     messagingSenderId:  "844904930990",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const Database    = firebaseApp.firestore();

/* Export Firenbase Database Configuartion */
export default Database;