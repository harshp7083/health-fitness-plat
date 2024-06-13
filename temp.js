import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth,GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  
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
  auth.languageCode ='en';
  const provider = new GoogleAuthProvider()
  const googleLogin = document.getElementById('google-btn')
  googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.replace("http://localhost:5502/html-files/user_home.html");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  })
