import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA5m7X21KTEs8VNxrSEL7sK8u_EXgnn1zs",
    authDomain: "giffy-gallery.firebaseapp.com",
    databaseURL: "https://giffy-gallery.firebaseio.com",
    projectId: "giffy-gallery"
};
//initialize firebase
firebase.initializeApp(config);

import Routes from './routes.js';

import './index.css';

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);






//initialize firebase

//export firebase
export default firebase;

//export an instance of the firebase db
export const database = firebase.database();



