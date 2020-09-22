import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyCbixajKEfmU_CDJLPmBGU1gWHFBMfsovw',
    authDomain: 'very-cool-pics.firebaseapp.com',
    databaseURL: 'https://very-cool-pics.firebaseio.com',
    projectId: 'very-cool-pics',
    storageBucket: 'very-cool-pics.appspot.com',
    messagingSenderId: '529455105955',
    appId: '1:529455105955:web:c67d589ac44fab3d80bc16',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();