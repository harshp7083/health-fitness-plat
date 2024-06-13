let eye_closed_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="eye2"  fill="black" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/></svg>'
let eye_open_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" id="eye" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>'

let seye = document.querySelectorAll('.eye-container');
for(let i=0;i<seye.length;i++)
{
  seye[i].addEventListener("click",()=>{
    let obj = seye[i].dataset;
    if(obj.eye=='open')
    {
      seye[i].innerHTML = eye_closed_svg;
      seye[i].dataset.eye='close';
      if(i==0)
      {
        document.getElementById('password').setAttribute('type',"text");
      }
      else{
        document.getElementById('confirm-password').setAttribute('type',"text");
      }
    }
    else{
      seye[i].innerHTML = eye_open_svg;
      seye[i].dataset.eye='open';
      if(i==0)
      {
        document.getElementById('password').setAttribute('type',"password");
      }
      else{
        document.getElementById('confirm-password').setAttribute('type',"password");
      }
    }
})
}

const firebaseConfig = {
  apiKey: "AIzaSyDlyUeeNCRwhdkqRv3dfC6kmspEy-1ZDYA",
  authDomain: "nutrithrive-database.firebaseapp.com",
  databaseURL: "https://nutrithrive-database-default-rtdb.firebaseio.com",
  projectId: "nutrithrive-database",
  storageBucket: "nutrithrive-database.appspot.com",
  messagingSenderId: "638478447610",
  appId: "1:638478447610:web:7221f45861a807d83a2a43"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

function save2() {
  return new Promise((resolve, reject) => {
    let usergender = "";
    let r1 = document.getElementById("dot-1");
    let r2 = document.getElementById("dot-2");
    let r3 = document.getElementById("dot-3");
    if (r1.checked) {
      usergender = "Male";
    } else if (r2.checked) {
      usergender = "Female";
    } else {
      usergender = "Prefer Not To Say";
    }
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let fullname = document.getElementById("userfullname").value;
    let password = document.getElementById("password").value;
    console.log(username)
    localStorage.setItem("user_name", username);
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = currentDate.getFullYear();

    database.ref("users/" + username).set({
      username: username,
      name: fullname,
      email: email,
      dob: dob,
      password: password,
      gender: usergender,
      date_joining: `${day}-${month}-${year}`,
      profile_pic: "http://127.0.0.1:5502/assets/no-profile-pc.avif"
    }, (error) => {
      if (error) {
        console.error("Error saving data:", error);
        reject(error);
      } else {
        console.log("Data saved successfully");
        resolve();
      }
    });
  });
}
async function saveAndRedirect() {
  try {
      // Assuming save2() returns a promise when data is successfully stored in Firebase
      await save2();

      // Data saved successfully, perform redirection
      document.querySelector('.body2').classList.add("d-none");
      document.querySelector('.refresh-animation').classList.remove("d-none");
      
      setTimeout(() => {
          window.location.replace("http://localhost:5502/html-files/user_home.html");
      }, 3000);
  } catch (error) {
      // Handle error if data saving fails
      console.error("Error saving data:", error);
  }
}
function submit_form(e) {
  e.preventDefault();
  let confirm_pass = document.getElementById('confirm-password').value;
  let pass = document.getElementById('password').value;
  if(confirm_pass != pass)
  {
      document.getElementById('error').innerText = "Both password must be identical !!!";
      setTimeout(()=>{
          document.getElementById('error').innerText ="";
      },3000)
      return ;
  }
  if(pass.length<8)
  {
      document.getElementById('error').innerText = "Minimum length of password should be 8 !!!";
      setTimeout(()=>{
          document.getElementById('error').innerText ="";
      },3000)
      return ;
  }
  let username = document.getElementById("username").value;
  const usersRef = database.ref('users');
  usersRef.child(username).once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
        document.getElementById('error').innerText = `Username '${username}' already exist !!`;
        setTimeout(()=>{
            document.getElementById('error').innerText ="";
        },3000)
    } else {
      saveAndRedirect();
        
    }
  })
  .catch(error => {
    console.error('Error checking user existence:', error);
  });
}
document.getElementById("loginForm").addEventListener("submit",submit_form);
document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".container");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(section1);

  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("container")) {
      element.style.animation = "appear 0.8s ease-in-out forwards";
    } 
  }
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});