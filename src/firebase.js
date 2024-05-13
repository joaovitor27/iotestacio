import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Import database compatibility module


const firebaseConfig = {
  apiKey: "AIzaSyA4GkrGr6hF5oDmoKKRYcMs8Q8n1KfP054",
  authDomain: "irrigation-9282c.firebaseapp.com",
  databaseURL: "https://irrigation-9282c-default-rtdb.firebaseio.com",
  projectId: "irrigation-9282c",
  storageBucket: "irrigation-9282c.appspot.com",
  messagingSenderId: "284421382774",
  appId: "1:284421382774:web:1a41b2f6e7c01968d53557"
};

firebase.initializeApp(firebaseConfig);

const database_ = firebase.database();

export default database_;
