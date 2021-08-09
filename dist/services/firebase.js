"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBL8CIQy_YgeXBKczyKDRRMRw7JgwldB_w',
  authDomain: 'fb-crud-abcf9.firebaseapp.com',
  projectId: 'fb-crud-abcf9',
  storageBucket: 'fb-crud-abcf9.appspot.com',
  messagingSenderId: '428936772391',
  appId: '1:428936772391:web:d14a36db11b33224168702'
}; // Initialize Firebase

var fb = _app["default"].initializeApp(firebaseConfig);

var db = fb.firestore();
exports.db = db;