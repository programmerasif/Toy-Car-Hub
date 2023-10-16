
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD60MAbQZRO6_yLZ9DRdsXaW8_fEeZKmzI",
  authDomain: "toy-car-hub.firebaseapp.com",
  projectId: "toy-car-hub",
  storageBucket: "toy-car-hub.appspot.com",
  messagingSenderId: "463029769684",
  appId: "1:463029769684:web:986a9b9672adf6a5a37241",
  measurementId: "G-GBF2JV5EPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app