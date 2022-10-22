import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUbm5vVA20_C1QLLsmMViosJeTonU1pRg",
    authDomain: "fir-tutorial-909f2.firebaseapp.com",
    projectId: "fir-tutorial-909f2",
    storageBucket: "fir-tutorial-909f2.appspot.com",
    messagingSenderId: "22905979861",
    appId: "1:22905979861:web:b02287f1536f69d15c335c",
    measurementId: "G-KGKD548N36"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)