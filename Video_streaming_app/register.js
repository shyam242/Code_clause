// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC8jz_2aUGhFXcku5sReOsfvie08P8E8A",
  authDomain: "login-7fb8a.firebaseapp.com",
  projectId: "login-7fb8a",
  storageBucket: "login-7fb8a.firebasestorage.app",
  messagingSenderId: "69745877102",
  appId: "1:69745877102:web:ba740cedd310ae90a3067f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form and inputs
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign up user
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful! Redirecting...");
      window.location.href = "home.html"; // Redirect to login page
    })
    .catch((error) => {
      alert(error.message); // Show error message
    });
});