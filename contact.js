function storecontact(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  let newData={};
  newData["name"] =name;
  newData["email"]=email;
  newData["message"] =message;
  let db3 = firebase.database();
  db3.ref('Contact/').once('value', function(message_object) {
    var index = parseFloat(message_object.numChildren()) + 1
    db3.ref('Contact/' + `contact_${index}`).set(newData).then(()=>{
    })
  }
  )
  document.querySelector(".contact-form").reset();
      document.querySelector('.c-message').classList.remove('d-none')
      document.querySelector('.c-message').classList.add('sliding')
      setTimeout(()=>{
        document.querySelector('.c-message').classList.remove('sliding')
        document.querySelector('.c-message').classList.add('sliding2')
      },1500)    
      setTimeout(()=>{
        document.querySelector('.c-message').classList.remove('sliding2')
        document.querySelector('.c-message').classList.add('d-none')
      },2500)
}

document.querySelector(".contact-form").addEventListener("submit", storecontact);

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".contact-form");
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
  // sec3.forEach((sec)=>{
  //   observer.observe(sec);  
  // })
  observer.observe(section1);
  // observer.observe(section2);
  // observer.observe(section3);
  // observer.observe(sec4);
  // observer.observe(sec5);
  // observer.observe(sec6);
  // observer.observe(sec7);
  // observer.observe(sec8);
  // Function to animate the element based on its ID
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("contact-form")) {
      element.style.animation = "cf-entry 2s ease-in-out forwards";
    } 
    // else if (elementClasses.contains("wwb-desc")) {
    //   element.style.animation = "pulsate 1s ease-in-out forwards";
    // }
    // else if (elementClasses.contains("f-card")) {
    //     element.style.animation = "scaleAndRotate 1s ease-in-out forwards";
    //   }
    //   else if (elementClasses.contains("pcard33")) {
    //     element.style.animation = "SlideInRight 1s ease-in-out forwards";
    //   }
    //   else if (elementClasses.contains("h-r-are-you")) {
    //     element.style.animation = "zoomout 1s ease-in-out forwards";
    //   }
    //   else if (elementClasses.contains("h-r-ready")) {
    //     element.style.animation = "zoomout 1s ease-in-out forwards";
    //   }
    //   else if (elementClasses.contains("h-r-your-limit")) {
    //     element.style.animation = "SlideInLeft 1s ease-in-out forwards";
    //   }
    //   else if (elementClasses.contains("h-r-push")) {
    //     element.style.animation = "SlideInLeft 1s ease-in-out forwards";
    //   }
  }
});


const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});