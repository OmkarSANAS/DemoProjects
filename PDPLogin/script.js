firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.href="./home.html";
    } else {
      // No user is signed in.
    }
  });

function login(){
    
    var useremail = document.getElementById("emailfield").value;
    var userpass = document.getElementById("passfield").value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpass).catch(function(error) {
        if (error) {
          // User is signed in.
          
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...

          window.alert(errorMessage);
    
        } else {
          // No user is signed in.
        }
      });
      
  }

function signup(){
  var mail = document.getElementById("emailfield").value;
  var pass = document.getElementById("passfield").value;
  
  
  firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function(error) {
    if (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert(errorMessage);
      
    } 

    else{
      window.alert("Sign Up Successfull. Login to continue.")
    }
      
    
    });
  }

function reset(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("emailfield").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.alert("Password Reset Email sent. Please check your inbox.");
  }).catch(function(error) {
    // An error happened.
    window.alert("Please mention your Email. If not, please try again.")
  });
}
