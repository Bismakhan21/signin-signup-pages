  var firebaseConfig = {
    apiKey: "AIzaSyC7RULZKZKkRKXA2JVGcex9Ur2GL2dPB8A",
    authDomain: "signup-signin-page-c958b.firebaseapp.com",
    projectId: "signup-signin-page-c958b",
    storageBucket: "signup-signin-page-c958b.appspot.com",
    messagingSenderId: "29173311752",
    appId: "1:29173311752:web:487e4e8320c7315be1a4bd",
    measurementId: "G-4W1K2Q2W02"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  //Sign up new users 

  
  function signUp(){
    var email = document.getElementById("email");
    var password =document.getElementById("password");

 //  web namespaced API
    
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
   console.log(user);

   //Send a user a verification email

   firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    alert("Email Verification Sent....");
  });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
     console.log(errorMessage);
  });
  }


// Sign in existing users

function login(){
    var email = document.getElementById("email");
    var password =document.getElementById("password");

    // web namespaces API

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

// Send a password reset email

function forgotPassword(){
    var email = document.getElementById("email");

    firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
    alert("Password reset email sent!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

// Google Authentication

function loginWithGoogle(){

    // Create an instance of the Google provider object:
    var provider = new firebase.auth.GoogleAuthProvider();

    //To sign in with a pop-up window, call signInWithPopup
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}



// Github Authentication

function  loginWithGithub() {

    // Create an instance of the GitHub provider object
    var provider = new firebase.auth.GithubAuthProvider();
   
    // To sign in with a pop-up window, call signInWithPopup
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}