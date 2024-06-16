import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfzKC5m1o-_yOCH_bI1Hzu6027afrtpjA",
  authDomain: "ecommerce-react-website-42110.firebaseapp.com",
  projectId: "ecommerce-react-website-42110",
  storageBucket: "ecommerce-react-website-42110.appspot.com",
  messagingSenderId: "720049493940",
  appId: "1:720049493940:web:cf55f9a99a95f6ef7c04e1"
};

const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

export default app;
