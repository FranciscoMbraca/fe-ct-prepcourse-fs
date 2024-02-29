function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var comp = numeros[0]
    
    if(numeros.length===0) return null;
    for(var i =0; i<numeros.length;i++){
        if (comp<= numeros.length){
        if (comp===numeros[i]){
            comp++;
       } else{
        return comp;
      }
    }
    }
   return null;

}

module.exports = encontrarNumeroFaltante;