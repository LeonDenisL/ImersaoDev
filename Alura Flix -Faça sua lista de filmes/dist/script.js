function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme")
  var filmeFavorito = campoFilmeFavorito.value
  var listaFilmes = document.querySelector('#listaFilmes')
 

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key=6ac040cdb08ce2085e436dba651a25aa&language=en-US&query=' + filmeFavorito}
  
     axios.request(options).then(function (response) {
        var data = response.data["results"][0]
        var id = data["id"]
        var nome = data["origina_title"]
        var capa = "https://image.tmdb.org/t/p/w500/"  + data["poster_path"] 
        
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=6ac040cdb08ce2085e436dba651a25aa&language=en-US'}
         
        axios.request(options).then(function (response) {
            var keyDoTrailer = response.data["results"][0]["key"];
            var video = `https://www.youtube.com/embed/${keyDoTrailer}`;
            
            var elementoFilme = "<a href='" + video + "' target=_blank><img src=" + capa + " width=175 height=250>"
            listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme


          })
        
      }).catch(function (error) {
          console.error(error);
      });
  
  filmeFavorito.value = ""
  
  }