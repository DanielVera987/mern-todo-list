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
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}; // Initialize Firebase

var fb = _app["default"].initializeApp(firebaseConfig);

var db = fb.firestore();
exports.db = db;