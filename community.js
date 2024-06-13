// We enclose this in window.onload.
// So we don't have ridiculous errors.
let hamburgerIcon 
let sidebar 
let color_user = {};
window.onload = function () {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlyUeeNCRwhdkqRv3dfC6kmspEy-1ZDYA",
    authDomain: "nutrithrive-database.firebaseapp.com",
    databaseURL: "https://nutrithrive-database-default-rtdb.firebaseio.com",
    projectId: "nutrithrive-database",
    storageBucket: "nutrithrive-database.appspot.com",
    messagingSenderId: "638478447610",
    appId: "1:638478447610:web:7221f45861a807d83a2a43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // This is very IMPORTANT!! We're going to use "db" a lot.
  var db = firebase.database();
  // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol
  class MEME_CHAT {
    // Home() is used to create the home page
    home() {
      // First clear the body before adding in
      // a title and the join form

      document.body.innerHTML ='<nav class="navbar"><div class="nav-logo"><img src="../assets/nav-logo.png" alt="" class="n-logo"></div><div class="hamburger-icon" id="hamburger-icon">&#9776;</div><div class="nav-links-2"><a href="./user_home.html" class="link3">Home</a><a href="./community.html" class="link3">Community</a><a href="./fitness.html" class="link3">Fitness</a><a href="./diet.html" class="link3">DietPlan</a><a href="./blog.html" class="link3">Blogs</a></div><div class="nav-signin2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" /><path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" /></svg><a class="sign-title" href="./user_signup.html">Logout</a></div></nav><div class="sidebar" id="sidebar"><h2 class="sidebar-heading">Dashboard</h2><a href="./user_home.html" class="link2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg><span>Home</span> </a><a href="./community.html" class="link2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/></svg><span>Community</span>    </a><a href="./fitness.html" class="link2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg><span>Fitness</span></a><a href="./diet.html" class="link2"><svg fill="#FFFF" height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 381.268 381.268" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1646_" d="M155.515,130.09c0,4.971-4.029,9-9,9H99.205c-4.971,0-9-4.029-9-9s4.029-9,9-9h47.309 C151.485,121.09,155.515,125.119,155.515,130.09z M150.993,372.268c0,4.971-4.029,9-9,9h-38.268 c-29.815,0-54.072-24.257-54.072-54.073v-210.82c0-19.407,10.445-37.186,27.056-46.801V44.37 c-5.363-4.635-8.762-11.483-8.762-19.111C67.947,11.331,79.277,0,93.204,0h59.311c13.926,0,25.256,11.331,25.256,25.258 c0,7.628-3.398,14.477-8.761,19.112v25.203c16.611,9.615,27.055,27.395,27.055,46.801v12.756c0,4.971-4.029,9-9,9s-9-4.029-9-9 v-12.756c0-14.287-8.509-27.261-21.678-33.052c-3.268-1.437-5.377-4.669-5.377-8.238V50.516H94.709v24.568 c0,3.569-2.11,6.802-5.377,8.239c-13.169,5.79-21.679,18.764-21.679,33.051v210.82c0,19.891,16.182,36.073,36.072,36.073h38.268 C146.964,363.268,150.993,367.297,150.993,372.268z M85.947,25.258c0,4.002,3.256,7.258,7.258,7.258h59.311 c4.001,0,7.256-3.256,7.256-7.257c0-4.003-3.255-7.259-7.256-7.259H93.204C89.27,18,85.947,21.323,85.947,25.258z M313.393,268.602 c3.088,8.854,4.724,18.264,4.724,27.878c0,33.854-19.944,63.138-48.7,76.718c-0.367,0.203-0.745,0.377-1.129,0.523 c-10.664,4.845-22.503,7.546-34.959,7.546c-46.75,0-84.784-38.035-84.784-84.787c0-26.097,12.058-50.695,32.479-66.726V199.04 c0-26.541,19.868-48.528,45.512-51.867c1.689-5.021,3.715-9.885,6.063-14.572c-7.657-22.587-0.573-50.785,18.058-70.145 c20.449-21.254,49.29-29.614,71.764-20.803c2.222,0.871,4.007,2.589,4.962,4.775c9.663,22.117,2.416,51.256-18.035,72.508 c-19.039,19.784-42.169,28.873-62.197,24.966c-0.633,1.391-1.232,2.8-1.799,4.226c23.069,5.444,40.287,26.205,40.287,50.912v30.714 c12.509,9.819,21.88,22.853,27.263,37.477C313.1,267.669,313.266,268.127,313.393,268.602z M247.777,109.778 c4.483-5.226,9.473-10.074,14.928-14.488c1.666-1.348,3.668-2.003,5.655-2.003c2.624,0,5.225,1.141,7.003,3.339 c3.126,3.864,2.528,9.531-1.336,12.658c-6.376,5.157-11.992,11.019-16.768,17.457c12.537-0.324,26.866-7.555,39.117-20.285 c14.061-14.611,20.225-34.258,15.821-49.215c-15.121-3.829-34.513,3.085-48.571,17.696 C253.504,85.457,248.639,98.22,247.777,109.778z M251.596,360.728c-4.924-9.555-7.488-20.125-7.488-31.103 c0-30.192,19.898-56.37,47.865-65.08c-4.894-8.982-11.851-16.857-20.483-22.879c-2.413-1.684-3.851-4.439-3.851-7.382V199.04 c0-18.855-15.292-34.207-34.126-34.307c-0.119,0.004-0.238,0.004-0.359,0c-18.835,0.096-34.13,15.449-34.13,34.307v35.244 c0,2.942-1.438,5.698-3.851,7.382c-17.926,12.505-28.628,32.996-28.628,54.813c0,36.826,29.959,66.787,66.784,66.787 C239.661,363.267,245.787,362.382,251.596,360.728z M300.117,296.479c0-5.124-0.591-10.176-1.727-15.067 c-21.135,6.063-36.283,25.608-36.283,48.213c0,8.448,2.063,16.566,6.016,23.844C287.298,341.719,300.117,320.568,300.117,296.479z M146.515,186.867H99.205c-4.971,0-9,4.029-9,9s4.029,9,9,9h47.309c4.971,0,9-4.029,9-9S151.485,186.867,146.515,186.867z"></path> </g></svg><span>DietPlan</span>  </a><a href="./blog.html" class="link2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16"><path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/><path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/></svg><span>Blogs</span></a><a href="./user_signup.html" class="link2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" /><path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" /></svg><span>Logout</span> </a></div>';
      hamburgerIcon = document.getElementById('hamburger-icon');
      sidebar = document.getElementById('sidebar');
      hamburgerIcon.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
      this.create_title();
      this.create_join_form();
    }
    // chat() is used to create the chat page
    chat() {
      this.create_title();
      this.create_chat();
    }
    // create_title() is used to create the title
    create_title() {
      // This is the title creator. 🎉
      var title_container = document.createElement("div");
      title_container.setAttribute("id", "title_container");

      var title_inner_container = document.createElement("div");
      title_inner_container.setAttribute("id", "title_inner_container");

      var title = document.createElement("h1");
      title.setAttribute("id", "title");
      title.textContent = "COMMUNITY";

      title_inner_container.append(title);
      title_container.append(title_inner_container);
      document.body.append(title_container);
      title.style.animation = "appear 1s ease-in-out forwards";
    }
    // create_join_form() creates the join form
    create_join_form() {
      // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
      var parent = this;

      var join_container = document.createElement("div");
      join_container.setAttribute("id", "join_container");
      var join_inner_container = document.createElement("div");
      join_inner_container.setAttribute("id", "join_inner_container");

      var join_button_container = document.createElement("div");
      join_button_container.setAttribute("id", "join_button_container");

      var join_button = document.createElement("button");
      join_button.setAttribute("id", "join_button");
      join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>';

      var join_input_container = document.createElement("div");
      join_input_container.setAttribute("id", "join_input_container");

      var join_input = document.createElement("input");
      join_input.setAttribute("id", "join_input");
      join_input.setAttribute("maxlength", 15);
      join_input.placeholder = "Enter Your Name";
      // Every time we type into the join_input
      join_input.onkeyup = function () {
        // If the input we have is longer that 0 letters
        if (join_input.value.length > 0) {
          // Make the button light up
          join_button.classList.add("enabled");
          // Allow the user to click the button
          join_button.onclick = function () {
            // Save the name to local storage. Passing in
            // the join_input.value
            parent.save_name(join_input.value);
            // Remove the join_container. So the site doesn't look weird.
            join_container.remove();
            // parent = this. But it is not the join_button
            // It is (MEME_CHAT = this).
            document.querySelector("nav").remove();
            document.getElementById("title_container").style.padding = "0px";
            parent.create_chat();
          };
        } else {
          // If the join_input is empty then turn off the
          // join button
          join_button.classList.remove("enabled");
        }
      };

      // Append everything to the body
      join_button_container.append(join_button);
      join_input_container.append(join_input);
      join_inner_container.append(join_input_container, join_button_container);
      join_container.append(join_inner_container);
      document.body.append(join_container);
    }
    // create_load() creates a loading circle that is used in the chat container
    create_load(container_id) {
      // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
      var parent = this;

      // This is a loading function. Something cool to have.
      var container = document.getElementById(container_id);
      container.innerHTML = "";

      var loader_container = document.createElement("div");
      loader_container.setAttribute("class", "loader_container");

      var loader = document.createElement("div");
      loader.setAttribute("class", "loader");

      loader_container.append(loader);
      container.append(loader_container);
    }
    // create_chat() creates the chat container and stuff
    create_chat() {
      // Again! You need to have (parent = this)
      var parent = this;
      // GET THAT MEMECHAT HEADER OUTTA HERE
      var title_container = document.getElementById("title_container");
      var title = document.getElementById("title");
      document.getElementById("title_inner_container").style.height = "100px";
      document.getElementById("title_inner_container").style.paddingTop = "0px";
      title_container.classList.add("chat_title_container");
      // Make the title smaller by making it 'chat_title'
      title.classList.add("chat_title");

      var chat_container = document.createElement("div");
      chat_container.setAttribute("id", "chat_container");

      var chat_inner_container = document.createElement("div");
      chat_inner_container.setAttribute("id", "chat_inner_container");

      var chat_content_container = document.createElement("div");
      chat_content_container.setAttribute("id", "chat_content_container");

      var chat_input_container = document.createElement("div");
      chat_input_container.setAttribute("id", "chat_input_container");

      var chat_input_send = document.createElement("button");
      chat_input_send.setAttribute("id", "chat_input_send");
      chat_input_send.setAttribute("disabled", true);
      chat_input_send.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>`;

      var chat_input = document.createElement("input");
      chat_input.setAttribute("id", "chat_input");
      // Only a max message length of 1000
      chat_input.setAttribute("maxlength", 1000);
      // Get the name of the user
      chat_input.placeholder = `${parent.get_name()} Write Something.....`;
      chat_input.onkeyup = function () {
        if (chat_input.value.length > 0) {
          chat_input_send.removeAttribute("disabled");
          document.querySelector("svg").style.fill = "lightgreen";
          chat_input_send.onclick = function () {
            chat_input_send.setAttribute("disabled", true);
            chat_input_send.classList.remove("enabled2");
            if (chat_input.value.length <= 0) {
              return;
            }
            // Enable the loading circle in the 'chat_content_container'
            parent.create_load("chat_content_container");
            // Send the message. Pass in the chat_input.value
            parent.send_message(chat_input.value);
            // Clear the chat input box
            chat_input.value = "";
            // Focus on the input just after
            chat_input.focus();
          };
        } else {
          chat_input_send.classList.remove("enabled2");
          document.querySelector("svg").style.fill = "white";
        }
      };

      var chat_logout_container = document.createElement("div");
      chat_logout_container.setAttribute("id", "chat_logout_container");

      var chat_logout = document.createElement("button");
      chat_logout.setAttribute("id", "chat_logout");
      chat_logout.textContent = "Logout";
      // "Logout" is really just deleting the name from the localStorage
      chat_logout.onclick = function () {
        localStorage.setItem("name","");
        // Go back to home page
        parent.home();
      };

      chat_logout_container.append(chat_logout);
      chat_input_container.append(chat_input, chat_input_send);
      chat_inner_container.append(
        chat_content_container,
        chat_input_container,
        chat_logout_container
      );
      chat_container.append(chat_inner_container);
      document.body.append(chat_container);
      // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'
      parent.create_load("chat_content_container");
      // then we "refresh" and get the chat data from Firebase
      parent.refresh_chat();
    }
    // Save name. It literally saves the name to localStorage
    save_name(name) {
      // Save name to localStorage
      localStorage.setItem("name", name);
    }
    // Sends message/saves the message to firebase database
    send_message(message) {
      var parent = this;
      // if the local storage name is null and there is no message
      // then return/don't send the message. The user is somehow hacking
      // to send messages. Or they just deleted the
      // localstorage themselves. But hacking sounds cooler!!
      if (parent.get_name() == null && message == null) {
        return;
      }

      // Get the firebase database value
      db.ref("chats/").once("value", function (message_object) {
        // This index is mortant. It will help organize the chat in order
        var index = parseFloat(message_object.numChildren()) + 1;
        db.ref("chats/" + `message_${index}`)
          .set({
            name: parent.get_name(),
            message: message,
            index: index,
          })
          .then(function () {
            // After we send the chat refresh to get the new messages
            parent.refresh_chat();
          });
      });
    }
    // Get name. Gets the username from localStorage
    get_name() {
      // Get the name from localstorage
      if (localStorage.getItem("name") != "") {
        return localStorage.getItem("name");
      } else {
        this.home();
        return null;
      }
    }
    // Refresh chat gets the message/chat data from firebase
    refresh_chat() {
      var chat_content_container = document.getElementById(
        "chat_content_container"
      );

      // Get the chats from firebase
      db.ref("chats/").on("value", function (messages_object) {
        // When we get the data clear chat_content_container
        chat_content_container.innerHTML = "";
        // if there are no messages in the chat. Retrun . Don't load anything
        if (messages_object.numChildren() == 0) {
          return;
        }

        // OK! SO IF YOU'RE A ROOKIE CODER. THIS IS GOING TO BE
        // SUPER EASY-ISH! I THINK. MAYBE NOT. WE'LL SEE!

        // convert the message object values to an array.
        var messages = Object.values(messages_object.val());
        var guide = []; // this will be our guide to organizing the messages
        var unordered = []; // unordered messages
        var ordered = []; // we're going to order these messages

        for (var i, i = 0; i < messages.length; i++) {
          // The guide is simply an array from 0 to the messages.length
          guide.push(i + 1);
          // unordered is the [message, index_of_the_message]
          unordered.push([messages[i], messages[i].index]);
        }

        // Now this is straight up from stack overflow 🤣
        // Sort the unordered messages by the guide
        guide.forEach(function (key) {
          var found = false;
          unordered = unordered.filter(function (item) {
            if (!found && item[1] == key) {
              // Now push the ordered messages to ordered array
              ordered.push(item[0]);
              found = true;
              return false;
            } else {
              return true;
            }
          });
        });

        // Now we're done. Simply display the ordered messages
        ordered.forEach(function (data) {
          var name = data.name;
          var message = data.message;

          var message_container = document.createElement("div");
          message_container.setAttribute("class", "message_container");

          var message_inner_container = document.createElement("div");
          message_inner_container.setAttribute(
            "class",
            "message_inner_container"
          );

          var message_user_container = document.createElement("div");
          message_user_container.setAttribute(
            "class",
            "message_user_container"
          );

          var message_user = document.createElement("p");
          message_user.setAttribute("class", "message_user");
          message_user.textContent = `${name}`;

          var message_content_container = document.createElement("div");
          message_content_container.setAttribute(
            "class",
            "message_content_container"
          );

          var message_content = document.createElement("p");
          message_content.setAttribute("class", "message_content");
          message_content.textContent = `${message}`;

          message_user_container.append(message_user);
          message_content_container.append(message_content);
          message_inner_container.append(
            message_user_container,
            message_content_container
          );
          message_container.append(message_inner_container);
          chat_content_container.append(message_container);
          if (name in color_user) {
            message_user.style.color = color_user[name];
          } else {
            color_user[name] =
              "#" + Math.floor(Math.random() * 16777215).toString(16);
            message_user.style.color = color_user[name];
          }

          if (name == localStorage.getItem("name")) {
            message_inner_container.style.float = "right";
            message_user.style.float = "right";
            message_content_container.style.float = "right";
            message_content.style.float = "right";
            message_content.style.marginRight = "10px";
            message_inner_container.style.marginRight = "10px";
            message_inner_container.style.paddingRight = "12px";
            message_inner_container.style.paddingLeft = "22px";
            message_inner_container.style.paddingTop = "10px";
            message_inner_container.style.paddingBottom = "10px";
          } else {
            message_content.style.marginLeft = "10px";
            message_inner_container.style.paddingRight = "22px";
            message_inner_container.style.paddingLeft = "12px";
            message_inner_container.style.paddingTop = "10px";
            message_inner_container.style.paddingBottom = "10px";
          }
        });
        // Go to the recent message at the bottom of the container
        chat_content_container.scrollTop = chat_content_container.scrollHeight;
      });
    }
  }
  // So we've "built" our app. Let's make it work!!
  var app = new MEME_CHAT();
  // If we have a name stored in localStorage.
  // Then use that name. Otherwise , if not.
  // Go to home.
  if (app.get_name() != null) {
    app.chat();
  }
};
