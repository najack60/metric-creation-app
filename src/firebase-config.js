import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBVrFem50CmII39p1JgdmBko9o5tFTsTy8",
	authDomain: "base-test-3b8f8.firebaseapp.com",
	projectId: "base-test-3b8f8",
	storageBucket: "base-test-3b8f8.appspot.com",
	messagingSenderId: "856778767175",
	appId: "1:856778767175:web:fb649ced75006a52e9aa62",
	measurementId: "G-E9XFYNXPG8"
      };

      const app = initializeApp(firebaseConfig);

      export const db = getFirestore(app);