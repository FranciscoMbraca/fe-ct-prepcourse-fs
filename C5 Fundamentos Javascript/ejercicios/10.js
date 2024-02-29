function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  //const dateObject = new Date(fecha);
  
  //if (!isNaN(dateObject.getTime()) ) return false;
  //if (!isNaN(fecha)) return false;
 //if ((!isNaN(fecha.getTime()))) return false;
   // return true;
  
    if (!isNaN(fecha)){
      if ((!isNaN(fecha.getTime()))) return true;
      } else{
        return false;
      }

  

   


}

module.exports = esFechaValida;