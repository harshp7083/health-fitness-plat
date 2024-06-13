function calculateAge(date1, date2) {
  // Parse the input strings into Date objects
  const parts1 = date1.split('-');
  const dateObject1 = new Date(parts1[0], parts1[1] - 1, parts1[2]);

  // Parse date2 with MM/DD/YYYY format
  
  const parts2 = date2.split('/');
  console.log(parts2)
  let day2 = Number(parts2[1])
  let month2 = Number(parts2[0]-1);
  let year2 = Number(parts2[2]);
  console.log(day2,month2,year2)
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
function fillGapsWithPercent20(inputString) {
  // Replace multiple consecutive spaces with a single space, then replace spaces with "%20"
  return inputString.replace(/\s+/g, " ").replace(/ /g, "%20");
}
function capitalizeEachWord(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
function capitalizeAndJoin(array) {
    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ');
}
function get_exercise() {
    let ex;
  let user_exercise = document.querySelector(".searched-exercise").value;
  ex=user_exercise;
  if(ex=='')
  {
    document.querySelector('.display-eb-name-fail').classList.add('d-none');
    document.querySelector('.display-eb-name-successful').classList.add('d-none');
    document.querySelector('.display-exercise-container ').style.height="90vh";
    return;
  }
  user_exercise = fillGapsWithPercent20(user_exercise).toLowerCase();
  let url = "https://exercisedb.p.rapidapi.com/exercises/name/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cbb9f12de0msh86a21072c30f006p136724jsn76c61e021bee",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  url = url + user_exercise
  fetch(url, options).then((data) => {
      return data.json();
    }).then((data) => {
        if(data.length==0)
        {
            document.querySelector('.display-eb-name-fail').classList.remove('d-none');
            document.querySelector('.display-eb-name-successful').classList.add('d-none');
            document.getElementById('not-found-span').innerText = ex;
            document.querySelector('.display-exercise-container ').style.height="90vh";
            return;
        }
        document.querySelector('.display-eb-name-fail').classList.add('d-none');
        document.querySelector('.display-eb-name-successful').classList.remove('d-none');
        document.querySelector('.display-exercise-container ').style.height="150vh";
      let len = data.length;
      let random = Math.floor(Math.random() * len);
      let bp = capitalizeEachWord(data[random].bodyPart)
      let equip = capitalizeEachWord((data[random].equipment))
      let gif =data[random].gifUrl;
      let tm = capitalizeEachWord((data[random].target))
      let name = capitalizeEachWord((data[random].name))
      let sec_mus = capitalizeAndJoin(data[random].secondaryMuscles)
      let instruct=data[random].instructions;
      document.querySelector('.exercise-pic').src = gif
      document.querySelector('.exer-span').innerText =name
      document.querySelector('.equip-span').innerText = equip
      document.querySelector('.part-span').innerText = bp
      document.querySelector('.muscle-span').innerText = tm
      document.querySelector('.smuscle-span').innerText = sec_mus;
      let i=1;
      document.querySelector('.display-instructions').innerHTML='';
      let hed = document.createElement('h2')
      hed.classList.add('instruction-title');
      hed.innerText='Instructions';
      document.querySelector('.display-instructions').append(hed);
      instruct.forEach((inst)=>{
        let para = document.createElement('p')
        para.classList.add('instruct');
        para.innerText=i+')'+ inst;
        i++;
        document.querySelector('.display-instructions').append(para);
      })
    });
}
document.getElementById("search-logo").addEventListener("click", get_exercise);
document.querySelector(".searched-exercise").addEventListener("change", get_exercise);

function putdata(){
    let username = localStorage.getItem("user_name");
    console.log(username);
    let database = firebase.database();
    const usersRef = database.ref("users");
    usersRef.child(username).once("value").then((snapshot) => {
        let data = snapshot.val();
        if(data["dob"])
        {
            let date1 = data["dob"];
            let date2 = new Date().toLocaleDateString()
            document.getElementById('age').value= Number(calculateAge(date1,date2))
        }
        if(data["height"])
        {
            document.getElementById('height').value  = data["height"] 
        }
        if(data["gender"])
        {
          let gen = data["gender"]
          if(String(gen)=='Male')
          {
  
            document.querySelector('#gender').value = 'Male'
            console.log(document.getElementById('gender').value)
          }
          else{
            document.getElementById('gender').value = 'Female'
          }
            
        }
  
        if(data["weight"])
        {
          document.getElementById('weight').value  = data["weight"] 
        }
    })
  }
  putdata()