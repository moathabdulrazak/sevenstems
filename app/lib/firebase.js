// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByE41Jzepvtk10pD1lWS5uDCLFMDd_UhE",
  authDomain: "midder-2414c.firebaseapp.com",
  projectId: "midder-2414c",
  storageBucket: "midder-2414c.appspot.com",
  messagingSenderId: "957296376665",
  appId: "1:957296376665:web:33fae0c2a29aed68786a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);
export default app;