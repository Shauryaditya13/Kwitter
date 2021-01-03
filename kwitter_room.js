
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBmGeWlC9GDQkscDmw1OAIMSiC78ip--kI",
      authDomain: "kwitter-47684.firebaseapp.com",
      databaseURL: "https://kwitter-47684-default-rtdb.firebaseio.com",
      projectId: "kwitter-47684",
      storageBucket: "kwitter-47684.appspot.com",
      messagingSenderId: "999516749190",
      appId: "1:999516749190:web:bb15d6618bea2782214007",
      measurementId: "G-4NSVVLBS3V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("user_namekey");
    document.getElementById("username").innerHTML="Welcome " +username;
     
    function addroom() {
      roomname=document.getElementById("room_name").value;
      localStorage.setItem("room_namekey",roomname);
      firebase.database().ref("/").child(roomname).update({purpose:"roomname"});
      window.location="kwitter_page.html";
    }
    
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);

      row='<div class="room_name" id="'+Room_names+'" onclick="redirecttoroomname(this.id)">#'+Room_names+'</div> <hr>';
      document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }
getData();
  
function redirecttoroomname(thisroom) {
  console.log("right now we are in the room"+thisroom);
  localStorage.setItem("room_namekey",thisroom);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_namekey");
  localStorage.removeItem("room_namekey");
  window.location="index.html";
}

