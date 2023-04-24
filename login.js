// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase ,  ref, set  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBRf8lnDbDytYgXbw3_8gn17UsDRxEWty4",
    authDomain: "qpack-9c1f6.firebaseapp.com",
    databaseURL: "https://qpack-9c1f6-default-rtdb.firebaseio.com",
    projectId: "qpack-9c1f6",
    storageBucket: "qpack-9c1f6.appspot.com",
    messagingSenderId: "712118888330",
    appId: "1:712118888330:web:d718fb93c08fd0e4cbca73",
    measurementId: "G-HD8KDMR1QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
document.getElementById('go').addEventListener('click' , ()=>{
  console.log('click')
  signInWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    if(user){
      console.log(user.uid)
    }

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

})
