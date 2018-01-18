(function(){
    init();
function init(){
    var inputFld=$('#titleFld');
    var searchBtn=$('#searchBtn');
    searchBtn.click(handleSearchBtn);
    function handleSearchBtn() {
        var title = inputFld.val();
        console.log(title);
        var url = 'http://www.omdbapi.com/?&apikey=8ad4c53d&s=' + encodeURI(title) + '&type=movie';
        $.ajax({
          url: url,
          success: renderMovies
        });
      };
}
function renderMovies(response) {
    console.log(response);
    var movieList=  $('#mobileList');
    movieList.empty();
    for (var i in response.Search) {
      var movie = response.Search[i];
      var li = $('<li class="list-group-item">');
      var img=$('<img src="' + movie.Poster + '" width="120px">'); 
      li.append(img);
      li.append(movie.Title);
      movieList.append(li);
    }
}
})();

function singOff() {
    window.location.href = '../index.html';
  }
  $('.sign-off').click(singOff);
  
  function next() {
    window.location.href = '../views/we.html';
  }
  $('.we').click(next);