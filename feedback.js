let checkicon ='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>'
let rating ="";
function storedata(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let feedback = document.getElementById("feedback").value;
  let form = document.querySelector(".f-form");
  
  let newdata = {};
  if(rating.length>0)
  {
    newdata["rating"] = rating;
  }
  newdata["name"] = name;
  newdata["feedback"] = feedback;
  let db2 = firebase.database()
  db2.ref('Feedback/').once('value', function(message_object) {
      var index = parseFloat(message_object.numChildren())+1
      db2.ref('Feedback/' + `feedback${index}`).set(newdata).then(()=>{
        setTimeout(function() {
          form.reset();
          remove();
          document.querySelector('.f-message').classList.remove('d-none')
          document.querySelector('.f-message').classList.add('sliding')
          setTimeout(()=>{
            document.querySelector('.f-message').classList.remove('sliding')
            document.querySelector('.f-message').classList.add('sliding2')
          },1500)    
          setTimeout(()=>{
            document.querySelector('.f-message').classList.remove('sliding2')
            document.querySelector('.f-message').classList.add('d-none')
          },2500)
        },2000)

      })
    }
    )

}
document.querySelector(".f-form").addEventListener("submit", storedata);
let stars = document.getElementsByClassName("star");
function gfg(n) {
  remove();
  rating = String(n) + " Stars"
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
}
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
  rating = "";
}
document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".f-form");
  // const section2 = document.querySelectorAll(".wwb-desc")[0];
  // const section3 = document.querySelectorAll(".wwb-desc")[1];
  // const sec3 = document.querySelectorAll(".f-card");
  // const sec4 = document.querySelector(".pcard33");
  // const sec5 = document.querySelector(".h-r-are-you")
  // const sec6 = document.querySelector(".h-r-ready")
  // const sec7 = document.querySelector(".h-r-your-limit")
  // const sec8 = document.querySelector(".h-r-push")
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(section1);
  // observer.observe(section2);
  // Function to animate the element based on its ID
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("f-form")) {
      element.style.animation = "ff-entry 1s ease-in-out forwards";
    } 
    // else if (elementClasses.contains("wwb-desc")) {
    //   element.style.animation = "pulsate 1s ease-in-out forwards";
    // }

  }
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});