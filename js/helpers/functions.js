function sessionActive() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('sesion activa');
    } else {
      location.href = "../index.html";
    }
  });
}
sessionActive();