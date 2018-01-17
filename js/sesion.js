
function registrar() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function() {
      window.location.href = '../views/carrusel.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  // console.log('estas registrado');
}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  }).catch(function(error) {
  });
}


function ingreso() {
  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contrasena2').value;

  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .then(function() {
      window.location.href = '../views/carrusel.html';

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log('existe un usuario activo');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe un usuario activo');
      // ...
    }
  });
}
observador();
