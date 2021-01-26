function login(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("userName", user_name);
    window.location = "chatPage.html";
    console.log(user_name);
    
  }