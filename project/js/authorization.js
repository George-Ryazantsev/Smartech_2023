// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgnSFFSwmfIbD2S8-fvHOyWhxXPssnUDc",
  authDomain: "cimpleo-172.firebaseapp.com",
  projectId: "cimpleo-172",
  storageBucket: "cimpleo-172.appspot.com",
  messagingSenderId: "879685847428",
  appId: "1:879685847428:web:693455df9d3d70c851b5d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const container = document.querySelector("#container"); //для того, чтобы скрыть форму после авторизации (authForm)
const secretContent = document.querySelector("#secretContent");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");
secretContent.style.display = "none";

const userSignIn = async () => {
  const signInEmail = email.value;
  const signInPassword = password.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You have signed in successfully!"); //авторизировались(вошли)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      container.style.display = "none";
      secretContent.style.display = "block";
    } else {
      secretContent.style.display = "none";
    }
  });
};
const userSignOut = async () => {
  await signOut(auth);
  window.location.reload();
};
checkAuthState();
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
