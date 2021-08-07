//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAX9l3LD66_4K6mCccCkmtfRgykf1UUmew",
    authDomain: "my-twitter-rip-off.firebaseapp.com",
    databaseURL: "https://my-twitter-rip-off-default-rtdb.firebaseio.com",
    projectId: "my-twitter-rip-off",
    storageBucket: "my-twitter-rip-off.appspot.com",
    messagingSenderId: "704238533857",
    appId: "1:704238533857:web:8ba28939cf253eadad8ba0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");

  function send() 
  { 
        msg = document.getElementById("msg").value; 
  firebase.database().ref(room_name).push({ 
        name:user_name, 
        message:msg, 
        like:0 
    }); 
  document.getElementById("msg").value = ""; 
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout() 
{ 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location.replace("index.html"); 
}