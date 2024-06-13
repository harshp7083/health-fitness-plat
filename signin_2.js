import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlyUeeNCRwhdkqRv3dfC6kmspEy-1ZDYA",
  authDomain: "nutrithrive-database.firebaseapp.com",
  databaseURL: "https://nutrithrive-database-default-rtdb.firebaseio.com",
  projectId: "nutrithrive-database",
  storageBucket: "nutrithrive-database.appspot.com",
  messagingSenderId: "638478447610",
  appId: "1:638478447610:web:7221f45861a807d83a2a43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById('google-btn');

googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Check if the user already exists in the database
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      // Assuming you have a 'users' node in your database
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          // User already exists, redirect to home page
          localStorage.setItem("user_name",user.uid)
          window.location.replace("http://127.0.0.1:5502/html-files/user_home.html");
          
        } else {
          const currentDate = new Date();
          const day = currentDate.getDate();
          const month = currentDate.getMonth() + 1; 
          const year = currentDate.getFullYear();
          console.log("fdf");
          // User doesn't exist, store user details in the database
          const userDetails = {
            username:user.uid,
            name: user.displayName,
            email: user.email,
            profile_pic: user.photoURL,
            date_joining:`${day}-${month}-${year}`,
            // Add any other details you want to store
          };
          localStorage.setItem("user_name",user.uid)
          set(userRef, userDetails).then(() => {
            // Data successfully stored, redirect to home page
            window.location.replace("http://127.0.0.1:5502/html-files/user_home.html");
          }).catch((error) => {
            console.error("Error storing user details: ", error);
          });
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});