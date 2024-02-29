function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arreglo=[];
  
  
  for(var i =0; i< array.length;i++){
    if(array[i]%2 === 0){
      arreglo.push(array[i]);
      
    } 
    }
    return arreglo;
}

module.exports = filtrarNumerosPares;
