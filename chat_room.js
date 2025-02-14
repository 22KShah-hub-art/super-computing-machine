var firebaseConfig = {
    apiKey: "AIzaSyAJ9OL3HNlsLFnQb3DNV1m_GwtC83dKwLk",
    authDomain: "lets-chat-webapp-ffb7e.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-ffb7e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webapp-ffb7e",
    storageBucket: "lets-chat-webapp-ffb7e.appspot.com",
    messagingSenderId: "936311143909",
    appId: "1:936311143909:web:a9906312dd5a9219a0430c"
  };


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
console.log(user_name);

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //i++/  i=i+1 / i+=1
 });
});

}

getData(); // calling the function defined above to retrieve the 

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; // redirecting to the message page
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}