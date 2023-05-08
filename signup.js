// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase ,  ref, set  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
let m = document.getElementById('m').value
let pass = document.getElementById('password').value
let username = document.getElementById('username').value
let uid  ;
let key;
const database = getDatabase();
let a = analytics
console.log(a)
let data = database;
console.log(data)
const provider = new GoogleAuthProvider();
const mainSign = document.getElementById('mainSign')
const btnK = document.getElementById('gotk').style.display = 'none'

document.getElementById('goSignup').addEventListener('click' , ()=>{
    createUserWithEmailAndPassword(auth, document.getElementById('m').value, document.getElementById('password').value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if(user){

                console.log(user.uid)
                const k = user.uid[0] + user.uid[1] + user.uid[2] + user.uid[3]
                console.log(k)
                console.log(user.uid[0] + user.uid[1] + user.uid[2] + user.uid[3])
                const db = getDatabase();
                const postListRef = ref(db, 'posts/users/' + user.uid[0] + user.uid[1] + user.uid[2] + user.uid[3]);
                const newPostRef = (postListRef);
                set(newPostRef, {
                    email:document.getElementById('m').value,
                    password:document.getElementById('password').value,
                    username:document.getElementById('username').value,
                    uid:user.uid,



                    // ...
                });//here my pp is hard - jassim
                mainSign.style.display = 'none'
                const btnK = document.getElementById('gotk').style.display = 'grid'
                btnK.addEventListener('click', function(){
                    window.location.href='main.html'
                })

                var tk = document.getElementById('textKey').innerHTML = 'Your key is [' + k  + '] . This key is not meant to be shared and will be used all across the website as well as for you to get your earnings '

            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });

})

document.getElementById('google').addEventListener('click' , ()=>{
    signInWithPopup(auth, provider)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            if(user){
                uid=user.uid;
                key = uid[0] + uid[1] + uid[3] + uid[4]
                console.log(key)
                console.log(uid)
                mainSign.style.display = 'none'
                const btnK = document.getElementById('gotk').style.display = 'grid'

                var tk = document.getElementById('textKey').innerHTML = 'Your key is [' + key  + '] . This key is not meant to be shared and will be used all across the website as well as for you to get your earnings '





            }
            const db = getDatabase();
            const postListRef = ref(db, 'posts/users/' + key);
            const newPostRef = (postListRef);
            set(newPostRef, {
                username:user.displayName,
                email:user.email,
                type:"Google",
                key:key,
                uid:uid,
                p:user.photoURL,
                // ...

                // ...s
            }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        // ...
    });


})})
