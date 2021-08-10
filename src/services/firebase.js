import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBL8CIQy_YgeXBKczyKDRRMRw7JgwldB_w',
  authDomain: 'fb-crud-abcf9.firebaseapp.com',
  projectId: 'fb-crud-abcf9',
  storageBucket: 'fb-crud-abcf9.appspot.com',
  messagingSenderId: '428936772391',
  appId: '1:428936772391:web:d14a36db11b33224168702',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
