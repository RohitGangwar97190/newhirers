import React, { useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPhoneNumber,
  setUpRecaptcha, // Import this instead of RecaptchaVerifier
} from "./components/firebase";
import { signInWithPopup } from "firebase/auth";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");

  // Send OTP for phone number verification
  const sendOtp = async () => {
    setUpRecaptcha(); // Use the setup function defined in firebase.js
    const appVerifier = window.recaptchaVerifier;
    console.log("App verifier:", appVerifier);

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      console.log(confirmationResult);
      setVerificationId(confirmationResult.verificationId);
      setMessage("OTP has been sent to your phone.");
    } catch (error) {
      console.log("guru message not sent");
      console.error("Error sending OTP:", error);
      setMessage("Failed to send OTP. Please try again.");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!verificationId || !otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    try {
      const credential = await auth.PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      const result = await auth.signInWithCredential(credential);
      setMessage("Phone number verified successfully!");
      console.log("User:", result.user);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("Failed to verify OTP. Please try again.");
    }
  };

  // Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setMessage(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setMessage("Failed to sign in with Google. Please try again.");
    }
  };

  // Facebook Sign-In
  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setMessage(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error("Facebook Sign-In Error:", error);
      setMessage("Failed to sign in with Facebook. Please try again.");
    }
  };

  return (
    <div>
      <h3>Authentication</h3>

      {/* Phone Number Authentication */}
      <div>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <button onClick={sendOtp}>Send OTP</button>
      </div>

      <div>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button onClick={verifyOtp}>Verify OTP</button>
      </div>

      {/* Google and Facebook Authentication */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>

      {/* Recaptcha for Phone Number */}
      <div id="recaptcha-container"></div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default PhoneAuth;
