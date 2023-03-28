// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import { APIKEY } from "../Base/base";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "durable-ring-380814.firebaseapp.com",
  projectId: "durable-ring-380814",
  storageBucket: "durable-ring-380814.appspot.com",
  messagingSenderId: "364491629300",
  appId: "1:364491629300:web:ce7c5b8cb6e6d5b50474a1",
  measurementId: "G-LYRMGF1SL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logOut = async () => {
  const signedOut = await signOut(auth);

  console.log(signedOut, "signoute");
  return signedOut;
};
export const auth = getAuth(app);
