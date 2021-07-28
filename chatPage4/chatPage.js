var firebaseConfig = {
  apiKey: "AIzaSyBOVeHx1yrNBIYoS7M7lD16CsBxkGytYto",
  authDomain: "let-s-chat-63725.firebaseapp.com",
  databaseURL: "https://let-s-chat-63725-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-63725",
  storageBucket: "let-s-chat-63725.appspot.com",
  messagingSenderId: "368489280449",
  appId: "1:368489280449:web:5ea948f9c092748d6bb540"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
       window.location = "login.html";
  
  
  }
  function send(){
        
        document.getElementById("msg").value = "";
        firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
        });
  }
  function getData() { firebase.database().ref("/" + room_name).on('value', function(snapshot){
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
    childKey = childSnapshot.key;
    childData = childSnapshot.val();
    if (childKey != "purpose"){
    firebase_message_id = childKey; message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>"+message + "</h4>";
    like_button="<button class='btn btn-warning'"+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

    row= name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML += row;
  } 
}); }); }
getData();

function updateLike(message_id){
    console.log("clicked on the like button - ");
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
}
  
  
