import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyDcpu3MSgcBVZtKh2qPqkGNPxVI0vFIziA",
    authDomain: "webchat-795b9.firebaseapp.com",
    databaseURL: "https://webchat-795b9.firebaseio.com",
    projectId: "webchat-795b9",
    storageBucket: "webchat-795b9.appspot.com",
    messagingSenderId: "996071709588",
    appId: "1:996071709588:web:30f27e906d83421fd3cd81",
    measurementId: "G-BPNN80YNJ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
