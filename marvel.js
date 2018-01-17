const privateKey = 'b6e70892a136224b29536bdc712008ee40b2cea4',
    publicKey = 'ef09d8f0880469e7e8d437f84f49abbd';

var content = $('#content');
var search = $('#search');
var comics = $('#comics');

const getConection = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos
            // console.log(info);
            var nameHero = $.map(info, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets 
                return val.name;
            })
            search.on('keyup', function () {
                nameHero.forEach(element => {
                    // console.log(search.val());
                    // console.log(element);
                    if (search.val() === element) {
                        // console.log(e.name);
                        console.log(true);
                    } else {console.log(false)}
                });

            })
            info.forEach(e => {
                // console.log(e);
                imagesH(e)

            });
            for (let value of info) { //Array con los datos de cada personaje
                infoHero = value;
            }
        })
        .catch(function (e) {
            alert(e);
        })
}

function imagesH(e) {
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =
        '<div class="ed-item l-1-3 s-50 hero">' +
        '<h3>' + e.name + '</h3>' +
        '<div class="hero-img">' +
        '<img class="imgHover" src="' + img + '" alt="">' +
        '<div class="description">' +
        //  '<h2> Descripción </h2>    ' + 
        '<p >' + e.description + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    content.append(hero);
}


function searchHero(e) {
    if (search.val() == e.name) {
        console.log('coinciden');
    }

}
// function searchHero(name) { 
//     const ts = Date.now();
//     const hash = md5(ts + privateKey + publicKey);
//     const hero = encodeURIComponent(name);
//     const URL = 'http://gateway.marvel.com/v1/public/characters?name=' + hero + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
//     fetch(URL)
//         .then(response => response.json())
//         .then(response => {
//             var info = response.data.results; // array con todo los datos
//             info.forEach(e => {
//                 imagesH(e)
//             });

//         })
//         .catch(function (e) {
//             alert(e);
//         })
// }

//funciones llamadas    
// search.on('keyup', function (e) {
//     console.log(e.keyCode);
//     if (e.keyCode === 13) { //13 es en el teclado ENTER
//         content.html('');
//         searchHero(search.val());
//     }
// })


comics.on('click', function(){
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'http://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos
            console.log(info);
            info.forEach(e => {              
                // console.log(e);
              
                imagesC(e)
            });
        })
        .catch(function (e) {
            alert(e);
        })
})

function imagesC(e) {    
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =
        '<div class="ed-item l-1-3 s-50 hero">' +
        '<h3>' + e.title + '</h3>' +
        '<div class="hero-img">' +
        '<img class="imgHover" src="' + img + '" alt="">' +
        '<div class="description">' +
        //  '<h2> Descripción </h2>    ' + 
        '<p >' + e.variantDescription + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    content.append(hero);
}



getConection();