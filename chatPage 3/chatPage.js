var firebaseConfig = {
  apiKey: "AIzaSyAYLrRZvMEGDb0ZcFwW61HGoQk2P7D8F3E",
  authDomain: "kwitter-7751a.firebaseapp.com",
  databaseURL: "https://kwitter-7751a-default-rtdb.firebaseio.com",
  projectId: "kwitter-7751a",
  storageBucket: "kwitter-7751a.appspot.com",
  messagingSenderId: "978983341085",
  appId: "1:978983341085:web:3c84f1d71d3069d5fa4af4",
  measurementId: "G-F0DP027QTJ"
};

user_name = localStorage.getItem("user_name");

document.getElementById("userTag").innerHTML =  user_name;
  firebase.initializeApp(firebaseConfig);
 

  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "chatRoom.html";

  }
  
  function getData() { firebase.database().ref("/").on('value', function(snapshot) 
  { 
    
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
  document.getElementById("output").innerHTML += row; 
}); }); }
getData();
function redirectToRoomName(name){
 
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chatRoom.html";

}

