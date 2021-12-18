import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDHOkoxywD3SUAYNcEQvlSCrGUSSA6mjlc",
  authDomain: "armut-4bdce.firebaseapp.com",
  projectId: "armut-4bdce",
  storageBucket: "armut-4bdce.appspot.com",
  messagingSenderId: "525297998981",
  appId: "1:525297998981:web:67f9df08ddad098534ddec",
  measurementId: "G-X77RL1ZW5Q",
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (error) {
  firebaseApp = initializeApp(firebaseConfig);
}
const storage = getStorage(firebaseApp);
export default storage;
