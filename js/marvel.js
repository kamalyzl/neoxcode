const privateKey = 'b6e70892a136224b29536bdc712008ee40b2cea4', publicKey = 'ef09d8f0880469e7e8d437f84f49abbd';

var content = $('#content');

//ancors callback event
var search = $('#search');
var comics = $('#comics');
var series = $('#series');
var event = $('#event');
var stories = $('#stories');
var movie = $('#movie');
var creators = $('#creators');
var personaje = $('#personaje');

function getHero() {
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los personajes
            console.log(info);
            var nameHero = $.map(info, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
                return val.name;
            })
            info.forEach(e => {
                showHero(e)
            });
            for (let value of info) { //Array con los datos de cada personaje
                infoHero = value;
            }
        })
        .catch(function (e) {
            alert(e);
        })
}

function getComics() {
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);

    const URL = 'https://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los comics
            console.log(info);
            info.forEach(e => {
                console.log(e);
                console.log(e);
                showComics(e)
            });
        })
        .catch(function (e) {
            alert(e);
        })
}

function getCreators() {
    // content.html('');
    // var movie =
    // fetch('http://www.omdbapi.com/?s=hulk&page=2&apikey=8ad4c53d')
    // .then(Response=>Response.json())
    // .then(lugares =>{
    //   console.log(lugares)
    // })
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'https://gateway.marvel.com/v1/public/creators?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los personajes
            console.log(info);
            info.forEach(e => {
                console.log(e);
                showCreators(e);
            });
        })
        .catch(function (e) {
            alert(e);
        })
}


function getEvents() {
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'https://gateway.marvel.com/v1/public/events?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los eventos
            console.log(info);
            info.forEach(e => {
                showEvents(e);
            });
        })
        .catch(function (e) {
            alert(e);
        })
}

function getSeries() {
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'https://gateway.marvel.com/v1/public/series?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los eventos
            console.log(info);
            info.forEach(e => {
                showSeries(e);
            });
        })
        .catch(function (e) {
            alert(e);
        })
}

function getStories() {
    content.html('');
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const URL = 'https://gateway.marvel.com/v1/public/stories?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            var info = response.data.results; // array con todo los datos de los eventos
            console.log(info);
            info.forEach(e => {
                showStories(e);
            });
        })
        .catch(function (e) {
            alert(e);
        })
}

function showStories(e) {

  var nameCharacters = $.map(e.characters.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })
 var nameComics = $.map(e.comics.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })
 var nameCreators = $.map(e.creators.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })
 var nameEvents = $.map(e.events.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })
 var nameOrigin = $.map(e.originalIssue.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })
 var nameSeries = $.map(e.series.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
     return val.name;
 })

 var hero =
     '<div class="hero ed-item s-1-3">' +
         '<h3>' + e.type + '</h3>' +
         '<div class="">' +
                 '<p >TIPO: ' + e.title + '</p>' +
                 '<p >N° EVENTOS : ' + e.events.available + '</p>' +
                 '<p >NOMBRE DEL EVENTO: ' + nameEvents + '</p>' +
                 '<p >N° DE HISTORIETAS : ' + e.characters.available + '</p>' +
                 '<p >NOMBRES HISTORIETAS: ' + nameCharacters + '</p>' +
                 '<p >N° DE COMICS : ' + e.comics.available + '</p>' +
                 '<p >NOMBRES COMICS: ' + nameComics + '</p>' +
                 '<p >N° DE CREADORES : ' + e.creators.available + '</p>' +
                 '<p >NOMBRES CREADORES: ' + nameCreators + '</p>' +
                 '<p >N° DE SERIES : ' + e.series.available + '</p>' +
                 '<p >NOMBRES SERIES: ' + nameSeries + '</p>' +
                 '<p >N° DE originalIssue : ' + e.originalIssue.available + '</p>' +
                 '<p >NOMBRES originalIssue: ' + nameOrigin + '</p>' +
         '</div>' +
     '</div>';




 content.append(hero);
}

function showSeries(e) {
    var nameEvents = $.map(e.events.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameComics = $.map(e.comics.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameCreators = $.map(e.creators.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =
        '<div class="hero ed-item s-1-3">' +
        '<h3>' + e.title + '</h3>' +
        '<div class="">' +
        '<img class="" src="' + img + '" alt="">' +
        '<div class="">' +
        '<p >DURACIÓN: ' + e.startYear + '-' + e.endYear + '</p>' +
        '<p >TIPO: ' + e.type + '</p>' +
        '<p > EDITADO : ' + e.modified + '</p>' +
        '<p >N° EVENTOS : ' + e.events.available + '</p>' +
        '<p >NOMBRE DEL EVENTO: ' + nameEvents + '</p>' +
        '<p >N° DE HISTORIETAS : ' + e.stories.available + '</p>' +
        '<p >NOMBRES HISTORIETAS: ' + nameStories + '</p>' +
        '<p >N° DE COMICS : ' + e.comics.available + '</p>' +
        '<p >NOMBRES COMICS: ' + nameComics + '</p>' +
        '<p >N° DE CREADORES : ' + e.creators.available + '</p>' +
        '<p >NOMBRES CREADORES: ' + nameCreators + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';




    content.append(hero);
}


function showEvents(e) {
    console.log(e);
    var nameCharacters = $.map(e.characters.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameComics = $.map(e.comics.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameCreators = $.map(e.creators.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameSeries = $.map(e.series.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =
        '<div class="hero ed-item s-1-3">' +
        '<h3>' + e.title + '</h3>' +
        '<div class="">' +
        '<img class="" src="' + img + '" alt="">' +
        '<div class="">' +
        // '<p >SIGUIENTE EVENTO: ' + e.next.name + ' </p>' +
        // '<p >EVENTO PROXIMO: ' + e.previous.name + ' </p>' +
        '<p >DESCRIPCION: ' + e.description + '</p>' +
        '<p >N° PERSONAJES : ' + e.characters.available + '</p>' +
        '<p >PERSONAJES: ' + nameCharacters + '</p>' +
        '<p >N° DE HISTORIETAS : ' + e.stories.available + '</p>' +
        '<p >NOMBRES HISTORIETAS: ' + nameStories + '</p>' +
        '<p >N° DE COMICS : ' + e.comics.available + '</p>' +
        '<p >NOMBRES COMICS: ' + nameComics + '</p>' +
        '<p >N° DE CREADORES : ' + e.creators.available + '</p>' +
        '<p >NOMBRES CREADORES: ' + nameCreators + '</p>' +
        '<p >N°  SERIES : ' + e.series.available + '</p>' +
        '<p >NOMBRES SERIES: ' + nameSeries + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';


    content.append(hero);
}

function showCreators(e) {
    var nameEvents = $.map(e.events.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameComics = $.map(e.comics.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameSeries = $.map(e.series.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.type;
    })
    var nameStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.type;
    })
    var hero =
        '<div class="ed-item s-1-3">' +
        '<h3>' + e.firstName + '</h3>' +
        '<div class="">' +
        '<p >N° DE COMICS : ' + e.comics.available + '</p>' +
        '<p >NOMBRE DE COMICS: ' + nameComics + '</p>' +
        '<p >N° DE EVENTOS : ' + e.events.available + '</p>' +
        '<p >NOMBRE DE EVENTOS: ' + nameEvents + '</p>' +
        '<p >N° DE SERIES : ' + e.series.available + '</p>' +
        '<p >NOMBRE DE SERIES: ' + nameSeries + '</p>' +
        '<p >N° DE HISTORIETAS : ' + e.stories.available + '</p>' +
        '<p >NOMBRE DE HISTORIETAS: ' + nameStories + '</p>' +
        '</div>' +
        '</div>';


    content.append(hero);
}


function showHero(e) {
    var nameEvents = $.map(e.events.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameSeries = $.map(e.series.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameComics = $.map(e.comics.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =
        '<div class="hero ed-item s-1-3">' +
        '<h3>' + e.name + '</h3>' +
        '<div class="hero-img">' +
        '<img class="imgHover" src="' + img + '" alt="">' +
        '<div class="">' +
        '<p >DESCRIPCION : ' + e.description + '</p>' +
        '<p >ULTIMA ACTUALIZACION : ' + e.modified + '</p>' +
        '<p >EVENTOS PARTICIPADOS : ' + e.events.available + '</p>' +
        '<p >NOMBRE DEL EVENTO PARTICIPADO : ' + nameEvents + '</p>' +
        '<p >N° HISTORIETAS : ' + e.stories.available + '</p>' +
        '<p >NOMBRES HISTORIETAS: ' + nameStories + '</p>' +
        '<p >N° SERIES : ' + e.series.available + '</p>' +
        '<p >NOMBRES SERIES: ' + nameSeries + '</p>' +
        '<p >N° COMICS : ' + e.comics.available + '</p>' +
        '<p >NOMBRES COMICS: ' + nameComics + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';




    content.append(hero);
}

function showComics(e) {
    var nameEvents = $.map(e.events.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var nameStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.name;
    })
    var typeStories = $.map(e.stories.items, function (val, i) { // Array con los nombres de heroes para la busqueda de restauranets
        return val.type;
    })
    var img = e.thumbnail.path + '/portrait_uncanny.' + e.thumbnail.extension;
    var hero =

            `<div class="ed-container border">
            <div class="ed-item s-50">
                <img src="${img}" alt="">
              </div>
              <div class="ed-item s-50">
                 <p >DESCRIPCION :  ${e.description}</p>
                    <p >ULTIMA ACTUALIZACION : ${e.modified}  </p>
                    <p >CANTIDAD DE PAGINAS :  ${e.pageCount} </p>
                    <p >FORMATO:  ${e.format}</p>
                    <p >EVENTOS PARTICIPADOS :  ${e.events.available}</p>
                    <p >NOMBRE DEL EVENTO PARTICIPADO :  ${nameEvents}</p>
                    <p >N° DE SERIE :  ${e.stories.available}</p>
                    <p >NOMBRES HISTORIETAS:  ${nameStories}</p>
                    <p >TIPOS DE HISTORIETAS:  ${typeStories}</p>
            </div>
            </div>`




    content.append(hero);
}

personaje.on('click', getHero);
comics.on('click', getComics);
event.on('click', getEvents);
creators.on('click', getCreators);
series.on('click', getSeries);
stories.on('click', getStories);
// movie.on('click', getMovie);
// search.on('click', getSearch);
