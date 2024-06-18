// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    // firebase.database().ref("/").child(user_name).update({
    //     purpose : "adding user"
    // });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



