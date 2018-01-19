(function () {
  
    
    var searchBtn = $('#searchBtn');

    searchBtn.on('click', function (event) {
      var inputFld = $('#titleFld').val();
      localStorage.setItem("title", inputFld);
      var title = localStorage.getItem("title");
      console.log(title);
      window.location.href = 'movies.html';
    });

})();