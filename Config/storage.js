import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
 apiKey: "AIzaSyAxgpWpXVAAX0O_PJTuqHVY9QzM4DbuRMo",
  authDomain: "alleventos.firebaseapp.com",
  projectId: "alleventos",
  storageBucket: "alleventos.appspot.com",
  messagingSenderId: "153208469755",
  appId: "1:153208469755:web:69f614c02caebec24b985e",
  measurementId: "G-RELCH9QDWG"
};

console.log(firebaseConfig);

let firebaseapp;
if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export { storage };
