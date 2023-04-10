import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCYmkUwmz7wiz3zL4B5ijSzncUJ8deO-0",
  authDomain: "portfolio-6802f.firebaseapp.com",
  projectId: "portfolio-6802f",
  storageBucket: "portfolio-6802f.appspot.com",
  messagingSenderId: "849362542814",
  appId: "1:849362542814:web:4536d7a3d25f1f9954e24f",
  measurementId: "G-359NMPG03H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);