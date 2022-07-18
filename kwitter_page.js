var firebaseConfig = {
    apiKey: "AIzaSyCxokMKU9oFddfNJXIZEeEk9jb_T4QsoX8",
    authDomain: "letschat-8c11a.firebaseapp.com",
    databaseURL: "https://letschat-8c11a-default-rtdb.firebaseio.com",
    projectId: "letschat-8c11a",
    storageBucket: "letschat-8c11a.appspot.com",
    messagingSenderId: "328750961598",
    appId: "1:328750961598:web:1521d603c37c247392dfef"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
      txt = document.getElementById("text").value;
      firebase.database().ref(room_name).push({
          nme: user_name,
          text:txt,
          like:0
      });
      document.getElementById("text").value = "";
  }

  function getData() 
  {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) 
    {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") 
        {
          firebase_message_id = childKey;
          message_data = childData;

          console.log(firebase_message_id);
    console.log(message_data);

    usernamee = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class='user_tick' src='twitter_pic.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
    like_button ="<button class='btn btn-light' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
        }
      });
    });
  }
  getData();

  function updateLike(message_id) {
    console.log("you clicked on the like button - " + message_id) ;
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updates_likes = Number(likes) + 1;
    console.log(updates_likes);


    firebase.database().ref(room_name).child(message_id).update({
      like:updates_likes
  });
}
  
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  //bug