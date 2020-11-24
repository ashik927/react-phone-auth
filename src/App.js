import './App.css';
import "firebase/auth";
import { useState } from 'react';
import 'firebase/firestore';
import Login from './components/Login';

function App() {


//   if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);  
// }
  // firebase.initializeApp(firebaseConfig);

  // Create a Recaptcha verifier instance globally
  // Calls submitPhoneNumberAuth() when the captcha is verified
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //   "recaptcha-container",
  //   {
  //     size: "invisible",
  //     // callback: function (response) {
  //     //   submitPhoneNumberAuth();
  //     // }
  //   }
  // );

  // This function runs when the 'sign-in-button' is clicked
  // Takes the value from the 'phoneNumber' input and sends SMS to that phone number
  // const submitPhoneNumberAuth=()=> {
  //   var phoneNumber = info.phoneNumber;
  //   var appVerifier = window.recaptchaVerifier;
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber)
  //     .then(function (confirmationResult) {
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // This function runs when the 'confirm-code' button is clicked
  // Takes the value from the 'code' input and submits the code to verify the phone number
  // Return a user object if the authentication was successful, and auth is complete
  // const submitPhoneNumberAuthCode=()=> {
  //   var code = info.code;
  //   window.confirmationResult 
  //     .confirm(code)
  //     .then(function (result) {
  //       var user = result.user;
  //       console.log(user);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  //This function runs everytime the auth state changes. Use to verify if the user is logged in
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log("USER LOGGED IN");
  //   } else {
  //     // No user is signed in.
  //     console.log("USER NOT LOGGED IN");
  //   }
  // });
  return (
  <Login></Login>
  );
}

export default App;
