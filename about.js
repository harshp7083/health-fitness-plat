/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName("quote");
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  textFit(quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
  resizeTextToFit();
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

let counters = document.querySelectorAll('.counter');
counters.forEach((counter)=>{
  let initial_count = 0 ;
  let final_count = counter.dataset.count;
  let counting =setInterval(updateCounting, 10);
  function updateCounting() {
    if (initial_count < 1000 && isInViewport(counter)) {
        initial_count += 5;
        counter.innerText = initial_count+"+";
        counting;
    }
    else if(initial_count >= 1000 && isInViewport(counter) && initial_count<final_count) 
    {
      initial_count += 100;
      counter.innerText = initial_count+"+";
      counting;
    }
    else if(initial_count >= final_count && isInViewport(counter)) 
    {
      counter.innerText = final_count+"+";
    }
    else if(!isInViewport(counter)){
      counter.innerText = "0";
      initial_count=0;
    }
}})

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".ab-s-desc");
  const section2 = document.querySelectorAll(".wwb-desc")[0];
  const section3 = document.querySelectorAll(".wwb-desc")[1];
  const sec3 = document.querySelectorAll(".f-card");
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
  sec3.forEach((sec)=>{
    observer.observe(sec);  
  })
  observer.observe(section1);
  observer.observe(section2);
  observer.observe(section3);
  // observer.observe(sec4);
  // observer.observe(sec5);
  // observer.observe(sec6);
  // observer.observe(sec7);
  // observer.observe(sec8);
  // Function to animate the element based on its ID
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("ab-s-desc")) {
      element.style.animation = "disappers 2s ease-in-out forwards";
    } 
    else if (elementClasses.contains("wwb-desc")) {
      element.style.animation = "pulsate 1s ease-in-out forwards";
    }
    else if (elementClasses.contains("f-card")) {
        element.style.animation = "scaleAndRotate 1s ease-in-out forwards";
      }
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