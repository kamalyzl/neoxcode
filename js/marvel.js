[09:27, 17/1/2018] +51 930 184 997: const conseguir = () =>{
  fetch('https://api.themoviedb.org/3/movie/76341?api_key=09e3edb03db5a1bbd3e71e1c4c96a44e&language=es')
  .then(Response=>Response.json())
  .then(lugares =>{
    console.log(lugares)
  })
}

conseguir();