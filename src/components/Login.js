import React, { useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import "firebase/auth";

const Login = () => {
    const [info, setInfo] = useState({});
    const handleBlur = (e) => {
      const setNewInfo = { ...info };
      setNewInfo[e.target.name] = e.target.value;
      setInfo(setNewInfo);
    }
   console.log(info)
   if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);  
}
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//   "recaptcha-container",
//   {
//     size: "invisible",
//     // callback: function (response) {
//     //   submitPhoneNumberAuth();
//     // }
//   }
// );

 let setUpRecaptcha = () => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        console.log("Captcha Resolved");
        this.onSignInSubmit();
      },
      defaultCountry: "IN",
    }
  );
};



const submitPhoneNumberAuth = () => {
  setUpRecaptcha()
  var phoneNumber = info.phoneNumber;
  var appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
    })
    .catch(function (error) {
      console.log(error);
    });
}
const  submitPhoneNumberAuthCode = () => {
  var code = info.code;
  let optConfirm = window.confirmationResult
  optConfirm
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      console.log("hello user",user);
    })
    .catch(function (error) {
      console.log(error);
    });
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user)
    console.log("USER LOGGED IN");
  } else {
    // No user is signed in.
    console.log("USER NOT LOGGED IN");
  }
});

    return (
        <div className="App">
        <input type="tel"  onChange={handleBlur} name="phoneNumber"/>
        <input type="text" onChange={handleBlur} name="code"/>
       
        <button onClick={submitPhoneNumberAuth}> 
        {/* id="sign-in-button" onClick={submitPhoneNumberAuth} */}
          SIGN IN WITH PHONE
      </button>
        <button onClick={submitPhoneNumberAuthCode}>
        {/* id="confirm-code" onClick={submitPhoneNumberAuthCode} */}
          ENTER CODE
      </button>
      <div id="recaptcha-container"></div>

      </div>
    );
};

export default Login;