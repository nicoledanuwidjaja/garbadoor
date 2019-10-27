import firebase from 'firebase'

// secrets! (firebase configuration)
const firebaseConfig = {
    apiKey: "AIzaSyC0t1s9xmCF9OtbBc45DyURUK5Na-UKs_I",
    authDomain: "garbadoor.firebaseapp.com",
    databaseURL: "https://garbadoor.firebaseio.com",
    projectId: "garbadoor",
    storageBucket: "garbadoor.appspot.com",
    messagingSenderId: "256041595261",
    appId: "1:256041595261:web:3d569d3ebee56aca969c14",
    measurementId: "G-FKQT6KZ2R5"
};

const firebasedb = firebase.initializeApp(firebaseConfig);
export default firebasedb;