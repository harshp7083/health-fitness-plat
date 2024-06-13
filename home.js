let index = 0;
let link = "http://127.0.0.1:5502/";
let mi_index = 4;
let img_array = [
  "assets/h-mi-1.avif",
  "assets/h-mi-2.avif",
  "assets/h-mi-3.avif",
  "assets/h-mi-4.avif",
  "assets/h-mi-5.avif",
  "assets/h-mi-6.avif",
  "assets/h-mi-7.avif",
  "assets/h-mi-8.avif",
];
let content_array = [
  "“The purpose of training is to tighten up the slack, toughen the body, and polish the spirit”",
  "“The Pain You Feel Today Will Be The Strength You Need Tomorrow”",
  "“Your body can stand almost anything. It's your mind that you have to convince”",
  "“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle”",
  "“Fitness is not just about the body. It's also about the mind. The only limits that exist are the ones you place on yourself”",
  "“Fitness is not about being better than someone else; it's about being better than you used to be”",
  "“Strive for progress, not perfection. Every step forward is a step toward a healthier you”",
  "“A one-hour workout is only 4% of your day. No excuses, prioritize your health”",
];
let left_arrow = document.getElementById("carousel-left");
let right_arrow = document.getElementById("carousel-right");
left_arrow.addEventListener("click", () => {
  index = index - 1;
  if (index == -1) {
    index = 7;
  }
  index = index % 8;
  let cimag_bg = document.querySelector(".cc-bg-image");
  let cimage = document.querySelector(".c-img");
  let content = document.querySelector(".c-content");
  content.innerText = content_array[index];
  cimage.src = link + img_array[index];
  cimag_bg.src = link + img_array[index];
});
right_arrow.addEventListener("click", () => {
  index = index + 1;
  index = index % 8;
  let cimag_bg = document.querySelector(".cc-bg-image");
  let cimage = document.querySelector(".c-img");
  let content = document.querySelector(".c-content");
  content.innerText = content_array[index];
  cimage.src = link + img_array[index];
  cimag_bg.src = link + img_array[index];
});
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".aim-desc");
  const section2 = document.querySelector(".aim-desc2");
  const sec3 = document.querySelector(".pcard11");
  const sec4 = document.querySelector(".pcard33");
  const sec5 = document.querySelector(".h-r-are-you")
  const sec6 = document.querySelector(".h-r-ready")
  const sec7 = document.querySelector(".h-r-your-limit")
  const sec8 = document.querySelector(".h-r-push")
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(section1);
  observer.observe(section2);
  observer.observe(sec3);
  observer.observe(sec4);
  observer.observe(sec5);
  observer.observe(sec6);
  observer.observe(sec7);
  observer.observe(sec8);
  // Function to animate the element based on its ID
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("aim-desc")) {
      element.style.animation = "fadeInAndRotate1 1s ease-in-out forwards";
    } else if (elementClasses.contains("aim-desc2")) {
      element.style.animation = "fadeInAndRotate2 1s ease-in-out forwards";
    }
    else if (elementClasses.contains("pcard11")) {
        element.style.animation = "SlideInLeft 1s ease-in-out forwards";
      }
      else if (elementClasses.contains("pcard33")) {
        element.style.animation = "SlideInRight 1s ease-in-out forwards";
      }
      else if (elementClasses.contains("h-r-are-you")) {
        element.style.animation = "zoomout 1s ease-in-out forwards";
      }
      else if (elementClasses.contains("h-r-ready")) {
        element.style.animation = "zoomout 1s ease-in-out forwards";
      }
      else if (elementClasses.contains("h-r-your-limit")) {
        element.style.animation = "SlideInLeft 1s ease-in-out forwards";
      }
      else if (elementClasses.contains("h-r-push")) {
        element.style.animation = "SlideInLeft 1s ease-in-out forwards";
      }
  }
});

const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});