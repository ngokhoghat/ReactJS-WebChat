import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyBk5dvWkTPNsVYX7P-Jdiix1Jn3wOLGGDA",
    authDomain: "github-4fe6d.firebaseapp.com",
    databaseURL: "https://github-4fe6d.firebaseio.com",
    projectId: "github-4fe6d",
    storageBucket: "github-4fe6d.appspot.com",
    messagingSenderId: "1040095152319",
    appId: "1:1040095152319:web:36983efe3836536b8a5e0a",
    measurementId: "G-EGQCR9DMB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
