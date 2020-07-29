import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAeLD1K78diUTidpC85ujg5_qWRf51OOQA",
  authDomain: "test-5998f.firebaseapp.com",
  databaseURL: "https://test-5998f.firebaseio.com",
  projectId: "test-5998f",
  storageBucket: "test-5998f.appspot.com",
  messagingSenderId: "826014721567",
  appId: "1:826014721567:web:b7366a8bcde22e98e0572a",
  measurementId: "G-Z7078T7ZR0"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;