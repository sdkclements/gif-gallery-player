import firebase from 'firebase';

// Initialize Firebase
/* Go to firebase console -> select Authentication -> TOP RIGHT 'WEB SETUP' -> fill in empty strings*/
const config = {
    apiKey: "AIzaSyA5m7X21KTEs8VNxrSEL7sK8u_EXgnn1zs",
    authDomain: "giffy-gallery.firebaseapp.com",
    databaseURL: "https://giffy-gallery.firebaseio.com",
    projectId: "giffy-gallery",
    storageBucket: "giffy-gallery.appspot.com",
    messagingSenderId: "513689650622"
};



//initialize firebase
firebase.initializeApp(config);

//export firebase
export default firebase;

//export an instance of the firebase db
export const database = firebase.database();

//export authentication service
export const auth = firebase.auth();

//export the googleAuth reference for later (could use twitter facebook etc here if you wanted )
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();