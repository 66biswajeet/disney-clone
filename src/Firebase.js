import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// import firebase from "firebase";
//import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZosKtShEDRDZu01dtE_bbgjAykpXwuSA",
  authDomain: "disneyclone-d3364.firebaseapp.com",
  projectId: "disneyclone-d3364",
  storageBucket: "disneyclone-d3364.appspot.com",
  messagingSenderId: "313948837031",
  appId: "1:313948837031:web:85752ddc4ea6fbed777782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {auth,provider};