function logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
  
      window.location.href="./main.html";
  
    }).catch(function(error) {
      // An error happened.

      window.location.href="./main.html";
    });
  }

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      if(user!=null){

        var email_id=user.email;
        var name = user.displayName;
        document.getElementById("para").innerHTML = "User Details:<br>Email: " + email_id;
                                                
        
      }

    } else {
      // No user is signed in.
    }
  });
