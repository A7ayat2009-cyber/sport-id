import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkuMPsXEdgPmumEvy-1nYsnQUzaxZY714",
  authDomain: "alza3eem-913ed.firebaseapp.com",
  projectId: "alza3eem-913ed",
  storageBucket: "alza3eem-913ed.firebasestorage.app",
  messagingSenderId: "412892587540",
  appId: "1:412892587540:web:333cd572e72eb8f972a901"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
