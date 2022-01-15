
var firebaseConfig = {
  apiKey: "AIzaSyBONsUE4kuCQ9oOPahYlD04skovVSvG0HA",
  authDomain: "my-kwitter-69294.firebaseapp.com",
  databaseURL: "https://my-kwitter-69294-default-rtdb.firebaseio.com",
  projectId: "my-kwitter-69294",
  storageBucket: "my-kwitter-69294.appspot.com",
  messagingSenderId: "335259825932",
  appId: "1:335259825932:web:0bd7b41e372c03dd443b29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
   




   function add(){
    addit=document.getElementById("addit").value;
    firebase.database().ref("/").child(addit).update({
          purpose:"adding room name" 
    });
    localStorage.setItem("addit",addit);
    window.location = "kwitter_page.html";
  }