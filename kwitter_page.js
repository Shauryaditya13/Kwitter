//YOUR FIREBASE LINKS
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
    roomname=localStorage.getItem("room_namekey");
    document.getElementById("roomname").innerHTML="roomname:"+roomname;

    function send() {
          message=document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,message:message,like:0   
          });
          document.getElementById("msg").value="";
    }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
       { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_namekey");
      localStorage.removeItem("room_namekey");
      window.location="index.html";
}
