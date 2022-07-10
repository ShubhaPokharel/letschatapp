var firebaseConfig = {
    apiKey: "AIzaSyCxokMKU9oFddfNJXIZEeEk9jb_T4QsoX8",
    authDomain: "letschat-8c11a.firebaseapp.com",
    databaseURL: "https://letschat-8c11a-default-rtdb.firebaseio.com",
    projectId: "letschat-8c11a",
    storageBucket: "letschat-8c11a.appspot.com",
    messagingSenderId: "328750961598",
    appId: "1:328750961598:web:1521d603c37c247392dfef"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  
   user_name = localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = "Welcome " + user_name;
  console.log(user_name);

  function addRoom() {
    roomname = document.getElementById("username").value;
    firebase.database().ref("/").child(roomname).update({
      purpose: "Adding room name"
    });
    localStorage.setItem("room_name",roomname);
    window.location = "kwitter_page.html";

  }

 