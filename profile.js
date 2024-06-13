const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

function switchoff() {
  let all_input = document.querySelectorAll("input");
  all_input.forEach((inpu) => {
    inpu.disabled = true;
  });
  document.querySelector("textarea").disabled = true;
  document.querySelector("select").disabled = true;
  document.querySelector(".update-email").disabled = false;
  document.querySelector(".edit-btn").value = "Edit";
  document.querySelector(".edit-btn").disabled = false;
  document.querySelector(".edit-btn").style.width = "160px";
  document.querySelector("select").style.backgroundColor = "transparent";
  document.querySelector('.profile-img').removeEventListener("click",showProfileOptions)
}
function switchon() {
  let all_input = document.querySelectorAll("input");
  all_input.forEach((inpu) => {
    inpu.disabled = false;
  });
  document.querySelector("textarea").disabled = false;
  document.querySelector("select").disabled = false;
  document.querySelector(".edit-btn").value = "Submit Changes";
  document.querySelector(".edit-btn").style.width = "180px";
  document.querySelector("select").style.backgroundColor = "white";
  document.querySelector('.profile-img').addEventListener("click",showProfileOptions)
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

document.querySelector(".profile-details-section").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('hb')
  if (document.querySelector(".edit-btn").value == "Edit") {
    switchon();
  } else {
    const usersRef = database.ref("users");
    let username = localStorage.getItem("user_name");
    let entryRef = database.ref('users/' +username);
    let newData={};
    newData["profile_pic"]=document.querySelector('.profile-img').src
    if(document.getElementById('name').value.length>0)
    {
        newData["name"]=document.getElementById('name').value
    }
    if(document.getElementById('mail').value.length>0)
    {
        newData["email"]=document.getElementById('mail').value
    }
    if(document.getElementById('gender').value.length>0)
    {
        newData["gender"]=document.getElementById('gender').value
    }
    if(document.getElementById('date-of-birth').value.length>0)
    {
        newData["dob"]=document.getElementById('date-of-birth').value
    }
    if(document.getElementById('height').value.length>0)
    {
        newData["height"]=document.getElementById('height').value
    }
    if(document.getElementById('weight').value.length>0)
    {
        newData["weight"]=document.getElementById('weight').value
    }
    if(document.getElementById('address').value.length>0)
    {
        newData["address"]=document.getElementById('address').value
    }
    if(document.getElementById('contact').value.length>0)
    {
        newData["contact"]=document.getElementById('contact').value
    }
    entryRef.update(newData).then(function(){
        switchoff();
        document.querySelector('.msg-container').classList.remove('hidden');
        document.querySelector('.msg-container').innerText = 'Your Changes Have Been Successfully Saved !!'
        document.querySelector('.msg-container').style.color = 'white';
        document.querySelector('.msg-container').classList.add('animate2');
        setTimeout(function() {
            document.querySelector('.msg-container').classList.add('hidden');
        },3500)
    }).catch(function(error) {
        document.querySelector('.msg-container').classList.remove('hidden');
        document.querySelector('.msg-container').innerText = "Coudn't Save Changes.....Try Again Later"
        document.querySelector('.msg-container').style.color = 'red';
        document.querySelector('.msg-container').classList.add('animate2');
        setTimeout(function() {
            document.querySelector('.msg-container').classList.add('hidden');
        },3500)
      });
  }
  
});

function putdata(){
    let username = localStorage.getItem("user_name");
    const usersRef = database.ref("users");
    usersRef.child(username).once("value").then((snapshot) => {
        let data = snapshot.val();
        if(data["profile_pic"])
        {
            document.querySelector('.profile-img').src = data["profile_pic"]
        }
        if(data["name"])
        {
            document.getElementById('name').value = data["name"]
        }
        if(data["email"])
        {
            document.getElementById('mail').value  = data["email"] 
        }
        if(data["gender"])
        {
            document.getElementById('gender').value = data["gender"]
        }
        if(data["dob"])
        {
            document.getElementById('date-of-birth').value = data["dob"]
        }
        if(data["height"])
        {
            document.getElementById('height').value = data["height"]
        }
        if(data["weight"])
        {
            document.getElementById('weight').value = data["weight"]
        }
        if(data["address"])
        {
            document.getElementById('address').value = data["address"]
        }
        if(data["contact"])
        {
            document.getElementById('contact').value = data["contact"]   
        }
    })
}



function showProfileOptions() {
    if(document.querySelector('.edit-btn').innerText=='Edit')
    {
        return;
    }
  let profileOptions = document.getElementById("profile-options");
  profileOptions.classList.add('animate');
  profileOptions.classList.remove("hidden");
}
function selectProfilePic(profilePic) {
    let link = 'http://127.0.0.1:5502/assets';
  let profileImage = document.querySelector(".profile-img");
  profileImage.src = link + profilePic;
  let profileOptions = document.getElementById("profile-options");
  profileOptions.classList.add("hidden");  
  profileOptions.classList.remove('animate');
}
document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.querySelector(".profile-container");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(section1);
    
    // Function to animate the element based on its ID
    function animateElement(element) {
      const elementClasses = element.classList;
      if (elementClasses.contains("profile-container")) {
        element.style.animation = "SlideY 1.5s ease-in-out forwards";
      } 

    }
  });
  
putdata()
