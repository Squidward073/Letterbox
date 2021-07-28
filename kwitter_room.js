var firebaseConfig = {
      apiKey: "AIzaSyBIh0vhL3Ji09IV0wUbUBRF0kxbbcbduNA",
      authDomain: "letterbox-a452e.firebaseapp.com",
      databaseURL: "https://letterbox-a452e-default-rtdb.firebaseio.com",
      projectId: "letterbox-a452e",
      storageBucket: "letterbox-a452e.appspot.com",
      messagingSenderId: "927685925898",
      appId: "1:927685925898:web:80358d0e5512c8f14e13f3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓛𝓮𝓽𝓽𝓮𝓻𝓫𝓸𝔁 " + user_name + "!";
function addRoom() 
{ 
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ purpose : "User added a room" });
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html"
}        


function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
