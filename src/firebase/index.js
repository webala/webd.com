import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	// ...
	apiKey: "AIzaSyDGrjowgRpv1Nsfa24axPV4mSnzzZWz5cY",
	authDomain: "webd-com.firebaseapp.com",
	projectId: "webd-com",
	storageBucket: "webd-com.appspot.com",
	messagingSenderId: "591321821871",
	appId: "1:591321821871:web:2e7bf19e032f65e3931a5a",
	measurementId: "G-1HH03RGLRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
