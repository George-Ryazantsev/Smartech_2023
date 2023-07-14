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
const signUpButton = document.querySelector("#signUpButton");
const signOutButton = document.querySelector("#signOutButton");
secretContent.style.display = "none";

const userSignUp = async () => {
  const signUpEmail = email.value;
  const signUpPassword = password.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      //alert("Your account has been created!"); // зарегистрировались!
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
      //alert("Your account has been created!"); // зарегистрировались!
    } else {
      secretContent.style.display = "none";
    }
  });
};
const userSignOut = async () => {
  await signOut(auth);
  window.location.reload();
};
document.querySelector("#signUpButton").onclick = function () {
  alert("Your account has been created!"); // зарегистрировались!
};
function alerted() {
  //alert("Вы нажали на кнопку");
}
checkAuthState();

signUpButton.addEventListener("click", userSignUp);
signOutButton.addEventListener("click", userSignOut);
