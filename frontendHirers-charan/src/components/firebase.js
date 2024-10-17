import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCWYUPSc1T77QkALR3J1EpKwRbqChvNQbs",
  authDomain: "hirers-6a3dd.firebaseapp.com",
  projectId: "hirers-6a3dd",
  storageBucket: "hirers-6a3dd.appspot.com",
  messagingSenderId: "333549452892",
  appId: "1:333549452892:web:36291b12c7693a6e7d7099",
  measurementId: "G-HK20F8MLJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers for Google and Facebook sign-in
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Setting up ReCAPTCHA for phone authentication
const setUpRecaptcha = () => {
  // Make sure 'recaptcha-container' exists in your HTML
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible", // You can change to 'normal' for visible captcha
        callback: (response) => {
          console.log("ReCAPTCHA Verified!", response);
        },
        "expired-callback": () => {
          // Reset the reCAPTCHA if it expires
          window.recaptchaVerifier.render().then((widgetId) => {
            // grecaptcha.reset(widgetId);
            console.log("reCAPTCHA expired. Resetting...");
          });
        },
      },
      auth
    );
  }
};

// Ensure the reCAPTCHA script is loaded (check if grecaptcha is undefined)
if (typeof grecaptcha === "undefined") {
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export {
  auth,
  googleProvider,
  facebookProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  setUpRecaptcha,
};
