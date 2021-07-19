import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfYUr-MogBfg1M4o43jW1xJZhn8ajJuYc",
    authDomain: "side-project-3429b.firebaseapp.com",
    projectId: "side-project-3429b",
    storageBucket: "side-project-3429b.appspot.com",
    messagingSenderId: "20334895614",
    appId: "1:20334895614:web:ed7019628cb62d29cee0af",
    measurementId: "G-75XQ70SHW4"
};

firebase.initializeApp(firebaseConfig)

export const authService = firebase.auth

export const storageService = firebase.storage