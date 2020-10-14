import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    //Firebase credentials for hosting
});


const auth=firebase.auth();

export {auth};