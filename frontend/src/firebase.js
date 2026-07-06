import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFTvRWUMzdSK3uvKxI_kx57-KI5Ol2GPA",
  authDomain: "phanolynx-ai.firebaseapp.com",
  projectId: "phanolynx-ai",
  storageBucket: "phanolynx-ai.firebasestorage.app",
  messagingSenderId: "241387472378",  // keep as Firebase gave
  appId: "1:241387472378:web:e4a724168f6342445f9043" // keep as Firebase gave
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Provider (no need to inject client_id)
const provider = new GoogleAuthProvider();
provider.addScope("email");
provider.addScope("profile");
provider.setCustomParameters({
  prompt: "select_account"
});

export { app, auth, provider, signInWithPopup, signOut };
