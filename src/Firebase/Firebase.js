import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";/**se nao funcionar tirar essa linha */

const firebaseConfig = {
    apiKey: "AIzaSyBbD_vuI25WFPHy2WPusWitnBcgwgoe_g8",
    authDomain: "agroconnect-cf045.firebaseapp.com",
    projectId: "agroconnect-cf045",
    storageBucket: "agroconnect-cf045.appspot.com",
    messagingSenderId: "804014550103",
    appId: "1:804014550103:web:74a01738495d84ae9f8712",
    measurementId: "G-RVNE5GBRWB"
  };

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);/**se nao funcionar tirar essa linha */

// Exporte os módulos do Firebase que você deseja usar
export const auth = app.auth();
export const firestore = app.firestore();
export default app;
