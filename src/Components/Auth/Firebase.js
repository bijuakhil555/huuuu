import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAXbQ9-j_ah0scqU8h_oea7zn7IN7EgXo",
    authDomain: "authtestotp-20c40.firebaseapp.com",
    projectId: "authtestotp-20c40",
    storageBucket: "authtestotp-20c40.appspot.com",
    messagingSenderId: "406911817001",
    appId: "1:406911817001:web:a52cc222e6d10a07b3d338",
    measurementId: "G-WB3117M2ZN"
}

firebase.initializeApp(firebaseConfig)

export default firebase