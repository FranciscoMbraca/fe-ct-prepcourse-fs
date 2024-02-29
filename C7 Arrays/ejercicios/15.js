function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var j =0;

  for(var i =1; i< array.length;i++){
  
   
    if(array[i]> array[j]){
      j = i;
      
    } 
    }
    return j;


  
}

module.exports = encontrarIndiceMayor;
