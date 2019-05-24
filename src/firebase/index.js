import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBPVli8DCwzJUS_VCRQE_Zatw02gvJArLU",
  authDomain: "jc8reactnative10.firebaseapp.com",
  databaseURL: "https://jc8reactnative10.firebaseio.com",
  projectId: "jc8reactnative10",
  storageBucket: "jc8reactnative10.appspot.com",
  messagingSenderId: "59553299577",
  appId: "1:59553299577:web:0d9df12a7c336bcc"
};
// Initialize Firebase
export const Fire = firebase.initializeApp(firebaseConfig);
