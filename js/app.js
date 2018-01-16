//Enviar solicitudes de datos   http://www.omdbapi.com/?apikey=8ad4c53d&    
//Solicitudes de API  poster    http://img.omdbapi.com/?apikey=8ad4c53d&



//Clave de la API (v3 auth) // 09e3edb03db5a1bbd3e71e1c4c96a44e

//Token de acceso de lectura a la API (v4 auth) -->eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWUzZWRiMDNkYjVhMWJiZDNlNzFlMWM0Yzk2YTQ0ZSIsInN1YiI6IjVhNWUyZmI3YzNhMzY4NWM4MjAwMDEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lj7JGXkCw6mkMGnTLHj-tiaIBtwaGmq8Pul5t8egPUU
//Ejemplo de Solicitud de API-->https://api.themoviedb.org/3/movie/550?api_key=09e3edb03db5a1bbd3e71e1c4c96a44e

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/authentication/token/new?api_key=09e3edb03db5a1bbd3e71e1c4c96a44e",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });