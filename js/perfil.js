jQuery(document).ready(function () {
  var $imageUser = $('#img-user');
  var $nameUser = $('#name-user');

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      console.log(displayName);
      var photoURL = user.photoURL;
      var uid = user.uid;
      var providerData = user.providerData;
      $imageUser.attr('src', photoURL);
      $nameUser.text(displayName);
      // ...
    } else {
      // User is signed out.
      console.log("No ha iniciado sesion");
    }
  });
  $(".oculto").hide();

  $(".inf").click(function () {
    var nodo = $(this).attr("href");
    if ($(nodo).is(":visible")) {
      $(nodo).hide();
      return false;
    } else {
      $(".oculto").hide("slow");
      $(nodo).fadeToggle("fast");
      return false;
    }
  });

  function viewFavorites() {
    firebase.auth().onAuthStateChanged(function (user) {

        firebase.database().ref('Moviessen').on('child_added', function (snapshot) {
            var html = '';
            var key = snapshot.key;
            var mensaje = snapshot.val().message;
            var fecha = snapshot.val().fecha;
            var hora = snapshot.val().hora;
            var uid = snapshot.val().uid;
            var ruta = snapshot.val().images;
            var rut=JSON.stringify(ruta, null, ' ');
            var contact = JSON.parse(rut);
            var keyimage=(Object.keys(contact));
            var obth=Object.values(contact[keyimage]);
            var url=obth[1];           
            firebase.database().ref('/Usuarios/' + uid).on('value', snap => {
                name = snap.val().name;
                photoURL = snap.val().photoURL;                
                html += '<div class="post">' +
                    '<div class="tweet-je">' +
                    '<div class="row">' +
                    '<div class="col s3">' +
                    '<img class="responsive-img profile-img" id="img-user" src=' + photoURL + ' alt="">' +
                    '</div>' +
                    '<div class="col s9">' +
                    '<span id="name_user bold">' + name + '</span>' +
                    '<br>' +
                    '<span class="fecha_post">' +
                    fecha + ' - ' + hora +
                    '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="col s12"> ' +
                    '<p id="postdesc"> ' +
                    mensaje +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="col s12"><img class="responsive-img" src='+ url +'></div>' +
                   
                    '</div>' +
                    '<div class="row">' +
                    '<div class="col s4"><i  class="tiny material-icons icon_post">favorite_border</i></div>' +
                    '<div class="col s4"><i data-key='+ key +' class="tiny material-icons icon_post comment">message</i></div>' +
                    '<div class="col s4"><i class="tiny material-icons icon_post">share</i></div>' +
                    '</div>' +
               
                    '</div>' +
                    '</div>/';


                $boxPost.append(html);
            });
            $('.comment').on('click', function () {
                $('textarea').val('');
                $(keycomment).val('');

                var keycomment = $(this).data('key');
                console.log(keycomment);
                $('#modal3').modal('open');
                $('#commentpost').on('click', function () {
                    console.log(keycomment);
                    $(keycomment).remove();
                });
            });
        });
})
  }
viewFavorites();

});
