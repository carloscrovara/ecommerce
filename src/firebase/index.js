import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBiEzTzYWbTsJiPwI83tiysInKL10fIFUw",
    authDomain: "ecommerce-carlos.firebaseapp.com",
    databaseURL: "https://ecommerce-carlos.firebaseio.com",
    projectId: "ecommerce-carlos",
    storageBucket: "ecommerce-carlos.appspot.com",
    messagingSenderId: "347728904453",
    appId: "1:347728904453:web:d7f699561225f6b60fb76c",
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}