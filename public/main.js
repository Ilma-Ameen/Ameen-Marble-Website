// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvPLLxJM2uB4cM3zhTDey7t_wSUJmGxGs",
  authDomain: "ameen-marble.firebaseapp.com",
  databaseURL: "https://ameen-marble-default-rtdb.firebaseio.com",
  projectId: "ameen-marble",
  storageBucket: "ameen-marble.appspot.com",
  messagingSenderId: "326711846157",
  appId: "1:326711846157:web:3141dbf85fded4c5a7bc44",
  measurementId: "G-Z3XYXS7PD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");

window.contact = function(){
    var reference = ref(db, "clients/");
    var keyTasks = push(reference);

    var obj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        id: keyTasks.key
    }
    
    set(keyTasks, obj);
    console.log(obj);
}