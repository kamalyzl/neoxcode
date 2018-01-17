var $imageUser = $('#img-user');
var $nameUser = $('#name-user');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var photoURL = user.photoURL;
    var uid = user.uid;
    var providerData = user.providerData;
    $imageUser.attr('src', photoURL);
    $nameUser.text(displayName);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});