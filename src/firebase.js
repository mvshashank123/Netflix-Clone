import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyA391wtpdDaz125bv5-hy2RE7LnBxoHGis",
    authDomain: "netflix-clone-6842f.firebaseapp.com",
    databaseURL: "https://netflix-clone-6842f.firebaseio.com",
    projectId: "netflix-clone-6842f",
    storageBucket: "netflix-clone-6842f.appspot.com",
    messagingSenderId: "673064180757",
    appId: "1:673064180757:web:5a080ad7fd499f3b0ac21c",
    measurementId: "G-DECW0FL4CS"
});


const auth=firebase.auth();

export {auth};