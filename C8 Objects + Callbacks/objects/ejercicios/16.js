function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  //return Object.keys(objetoUsuario).includes(password);
  if(objetoUsuario.password === password) return true;
  return false;
}

module.exports = verificarPassword;
