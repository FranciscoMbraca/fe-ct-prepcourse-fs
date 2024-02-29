function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
 // if (array.lenth === 0) return true;
  const arreglo = array[0];
  
  for(var i=1;i < array.length; i++){
    if(array[i] !== arreglo){
      return false;
    }
}
return true;
}

module.exports = todosIguales;
