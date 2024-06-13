let eye_closed_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="eye2"  fill="black" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/></svg>';
let eye_open_svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" id="eye" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>';

let seye = document.querySelector(".eye-container");

seye.addEventListener("click", () => {
  let obj = seye.dataset;
  if (obj.eye == "open") {
    seye.innerHTML = eye_closed_svg;
    seye.dataset.eye = "close";

    document.getElementById("password").setAttribute("type", "text");
  } else {
    seye.innerHTML = eye_open_svg;
    seye.dataset.eye = "open";

    document.getElementById("password").setAttribute("type", "password");
  }
});

const database = firebase.database();
function submit_form(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  const usersRef = database.ref("users");
  usersRef.child(username).once("value").then((snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        if (data.password == pass) {
          localStorage.setItem("user_name",username)
          document.querySelector(".body2").classList.add("d-none");
          document.querySelector(".refresh-animation").classList.remove("d-none");
          setTimeout(() => {window.location.replace("http://localhost:5502/html-files/user_home.html");}, 3000);
        } else {
          document.getElementById("error").innerText = `Invalid login credentials. Please check your username and password and try again.`;
          setTimeout(() => {
            document.getElementById("error").innerText = "";
          }, 3000);
        }
      } else {
        document.getElementById(
          "error"
        ).innerText = `Invalid login credentials. Please check your username and password and try again.`;
        setTimeout(() => {
          document.getElementById("error").innerText = "";
        }, 3000);
      }
    });
}
document.getElementById("loginForm").addEventListener("submit", submit_form);
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