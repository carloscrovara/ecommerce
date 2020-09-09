import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "tuApiKey",
    authDomain: "tuauthDomain",
    databaseURL: "tudatabaseURL",
    projectId: "tuProjectId",
    storageBucket: "tuStorageBucket",
    messagingSenderId: "tumessagingSenderId",
    appId: "tuAppId"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}