const firebaseConfig = {
  apiKey: "AIzaSyDlyUeeNCRwhdkqRv3dfC6kmspEy-1ZDYA",
  authDomain: "nutrithrive-database.firebaseapp.com",
  databaseURL: "https://nutrithrive-database-default-rtdb.firebaseio.com",
  projectId: "nutrithrive-database",
  storageBucket: "nutrithrive-database.appspot.com",
  messagingSenderId: "638478447610",
  appId: "1:638478447610:web:7221f45861a807d83a2a43"
};
let name_of_user;
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

document.querySelector("#formReset").addEventListener("submit", (e) => {
    e.preventDefault()
  let username = document.getElementById("username").value;
  const usersRef = database.ref("users");
  usersRef.child(username).once("value").then((snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        let dateofbirth = document.getElementById("date").value;
        if(dateofbirth!=data.dob)
        {
            document.querySelector(".error-desc").innerText = `Invalid Credentials`;
            setTimeout(() => {
                document.querySelector(".error-desc").innerText = "";
            }, 4000);
            return;
        }
        name_of_user = username
        document.querySelector(".submit-btn").classList.add("d-none");
        document.querySelector(".username-input").classList.add("d-none");
        document.querySelector(".date-input").classList.add("d-none");
        document.querySelector(".back-to-login").classList.add("d-none");
        document.querySelector(".reset-btn").classList.remove("d-none");
        document.querySelector(".reset-input").classList.remove("d-none");
        document.querySelector(".reset-input").classList.add("animate");
        document.querySelector(".reset-btn").classList.add("animate");
        document.getElementById('password').setAttribute("required",true);
        document.getElementById('date').setAttribute("required",false);
        document.getElementById('username').setAttribute("required",false);

      } else {
        document.querySelector(".error-desc").innerText = `Invalid Credentials`;
        setTimeout(() => {
            document.querySelector(".error-desc").innerText = "";
        }, 4000);
      }
    });
});




let eye_closed_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="eye2"  fill="black" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/></svg>';
let eye_open_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" id="eye" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>';
let eye_con = document.querySelector(".eye-container");
eye_con.addEventListener("click", () => {
  let eyeval = document.querySelector(".eye-container").dataset.eye;
  if (eyeval == "open") {
    eye_con.innerHTML = eye_closed_svg;
    eye_con.dataset.eye = "close";
    document.getElementById("password").setAttribute("type", "text");
  } else {
    eye_con.innerHTML = eye_open_svg;
    eye_con.dataset.eye = "open";
    document.getElementById("password").setAttribute("type", "password");
  }
});

function checkPasswordStrength() {
  let password = document.getElementById("password").value;
  let color_of_bar = document.querySelector(".password-strength-color");

  // Check password strength and apply styles
  let desc = document.querySelector(".pass-strength-desc");
  let color_div = document.getElementById("password-strength-meter");
  if (password.length == 0) {
    color_div.classList.add("d-none");
    color_of_bar.style.width = "0%";
    return;
  }
  let strength_desc = document.querySelector(".psd");
  color_div.classList.remove("d-none");
  const strength = calculatePasswordStrength(password);
  console.log(strength);
  if (strength <= 20) {
    color_of_bar.style.width = "20%";
    color_of_bar.style.backgroundColor = "#ff4d4d";
    strength_desc.innerText = "Weak";
    strength_desc.style.color = "#ff4d4d";
  } else if (strength <= 40) {
    color_of_bar.style.width = "40%";
    color_of_bar.style.backgroundColor = "#ffa07a";
    strength_desc.innerText = "Fair";
    strength_desc.style.color = "#ffa07a";
  } else if (strength <= 60) {
    color_of_bar.style.width = "60%";
    color_of_bar.style.backgroundColor = "#ffd700";
    strength_desc.innerText = "Good";
    strength_desc.style.color = "#ffd700";
  } else if (strength <= 80) {
    color_of_bar.style.width = "80%";
    color_of_bar.style.backgroundColor = "#9acd32";
    strength_desc.innerText = "Strong";
    strength_desc.style.color = "#9acd32";
  } else {
    color_of_bar.style.width = "100%";
    color_of_bar.style.backgroundColor = "#00ff7f";
    strength_desc.innerText = "Very Strong";
    strength_desc.style.color = "#00ff7f";
  }
}

function calculatePasswordStrength(password) {
  // Regular expressions for password complexity levels
  const hasLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  // Calculate strength based on complexity levels
  const strength =
    (hasLength ? 20 : 0) +
    (hasLowercase ? 20 : 0) +
    (hasUppercase ? 20 : 0) +
    (hasDigit ? 20 : 0) +
    (hasSpecialChar ? 20 : 0);

  return strength;
}
document.getElementById("password").addEventListener("keyup", checkPasswordStrength);
document.querySelector(".reset-btn").addEventListener("click", ()=>{
    let username = name_of_user;
    let passw = document.getElementById("password").value;
    if(passw.length<8)
    {
        document.querySelector(".error-desc").innerText = `Minumum length of passoword should be 8`;
        setTimeout(() => {
            document.querySelector(".error-desc").innerText = "";
        }, 4000);   
        return;
    }
    let entryRef = database.ref('users/' +username);
    let newData = {
        password: document.getElementById("password").value
      };
    entryRef.update(newData).then(function() {
        document.querySelector('.rf-content').classList.add('d-none')
        document.querySelector('.succesfull-update').classList.remove('d-none')
        document.querySelector('.succesfull-update').classList.add('animate')
    }).catch(function(error) {
    console.error("Error updating entry: ", error);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".bg-image");

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
    if (elementClasses.contains("bg-image")) {
      element.style.animation = "disappers 2s ease-in-out forwards";
    } 
  }
});