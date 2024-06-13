const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


function calculateAge(date1, date2) {
    // Parse the input strings into Date objects
    const parts1 = date1.split('-');
    const dateObject1 = new Date(parts1[0], parts1[1] - 1, parts1[2]);
  
    // Parse date2 with MM/DD/YYYY format
    
    const parts2 = date2.split('-');
    console.log(parts2)
    let day2 = Number(parts2[0])
    let month2 = Number(parts2[1]-1);
    let year2 = Number(parts2[2]);

    const dateObject2 = new Date(year2,month2,day2);
  
    // Calculate the age difference in milliseconds
    const ageDifferenceMs = Math.abs(dateObject1 - dateObject2);
    console.log(dateObject1)
    console.log(dateObject2)
    // Convert the age difference to years
    const ageDifferenceYears = ageDifferenceMs / (1000 * 60 * 60 * 24 * 365.25);
  
    // Round down to the nearest whole number to get the age
    const age = Math.floor(ageDifferenceYears);
    return age;
  }
let pid = "card-container-"
let imgid = "imgid"
let buttons_array = document.querySelectorAll('.read-more-btn');
buttons_array.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let bid = btn.getAttribute('id');
        let content_id = pid+bid;
        let image_id = imgid+bid;
        if(btn.innerText=='Read More')
        {
            
            document.getElementById(image_id).classList.add('animate')
            document.getElementById(image_id).classList.add('d-none')
            document.getElementById(content_id).classList.remove('d-none');
            document.getElementById(content_id).classList.add('animate2')
            btn.innerText="Read Less"
        }
        else
        {
            document.getElementById(image_id).classList.remove('animate')
            document.getElementById(content_id).classList.remove('animate2')
    
            document.getElementById(content_id).classList.add('animate')
            document.getElementById(content_id).classList.add('d-none')
            document.getElementById(image_id).classList.remove('d-none')
            document.getElementById(image_id).classList.add('animate2')
    
            btn.innerText="Read More";
        }
    })
   
})

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
function putdata(){
    let username = localStorage.getItem("user_name");
    console.log(username);
    console.log(username);
    const usersRef = database.ref("users");
    usersRef.child(username).once("value").then((snapshot) => {
        let data = snapshot.val();
        if(data["profile_pic"])
        {
            document.querySelector('.user-profile-pic').src = data["profile_pic"]
            document.querySelector('.home-container-1-left-bg').src = data["profile_pic"]
        }
        if(data["name"])
        {
            document.querySelector('.name-span').innerText = data["name"]
        }
        if(data["gender"])
        {
            document.querySelector('.gender-span').innerText = data["gender"]
        }
        if(data["dob"])
        {
            let date1 = data["dob"];
            const currentDate = new Date();


            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
            const year = currentDate.getFullYear();

            document.querySelector('.age-span').innerText= calculateAge(date1,`${day}-${month}-${year}`)+" yr"
        }
        if(data["date_joining"])
        {
            document.querySelector('.doj-span').innerText = data["date_joining"]
        }
    })
}
document.addEventListener("DOMContentLoaded", function () {
    
    const sec2 = document.querySelector('.home-container-1-right-inner-img-2')
    console.log(sec2)
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(sec2);
    // Function to animate the element based on its ID
    function animateElement(element) {
      const elementClasses = element.classList;
      if(elementClasses.contains("home-container-1-right-inner-img-2"))
      {
        element.style.animation = "moveRight2 3s ease-in-out forwards";
      }
    }
  });
putdata()