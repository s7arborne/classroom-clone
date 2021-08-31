import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDSONydvOE2GIMyK6ap0n8IBey_LCD9mw",
  authDomain: "classroom-clone-93979.firebaseapp.com",
  projectId: "classroom-clone-93979",
  storageBucket: "classroom-clone-93979.appspot.com",
  messagingSenderId: "1085143094152",
  appId: "1:1085143094152:web:a1af45260f10b84a9ba03d",
  measurementId: "G-VH5XWVHYQD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;