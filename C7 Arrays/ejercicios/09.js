function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let ale = Math.floor(Math.random()*(array.length));
   return array[ale];
}

module.exports = obtenerElementoAleatorio;
