import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyBcizyX9ed3WN0JQ7PVOSuIoFrVOnDHzac",
  authDomain: "smtsp-portal.firebaseapp.com",
  projectId: "smtsp-portal",
  storageBucket: "smtsp-portal.appspot.com",
  messagingSenderId: "928711061722",
  appId: "1:928711061722:web:c89e257175a8872128b5e3",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const FirebaseStorage = getStorage(app);

export { FirebaseStorage, db };
