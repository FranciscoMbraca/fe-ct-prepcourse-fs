function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  //console.log(objetoUsuario.posts.length);
 // console.log(objetoUsuario.posts[0].likes);
  var resultado =0;

  for(let i=0; i<objetoUsuario.posts.length;i++){
    resultado = objetoUsuario.posts[i].likes + resultado;
  }

  return resultado;
  

}

module.exports = sumarLikesDeUsuario;
