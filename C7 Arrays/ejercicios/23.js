function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var array =[];
  var a =false;

    
  
  for(var i=0; i<10;i++){
    num = num +2;
    array.push(num);
    if (num === i) {
      a= true;
        break; 
    }
   
  }
  if (a){
    return "Se interrumpió la ejecución";
  } else{
    return array;

  }
  
}

module.exports = breakStatement;
