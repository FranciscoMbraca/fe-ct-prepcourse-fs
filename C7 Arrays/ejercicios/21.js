function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var arreglo = [];
  var e =false;
  var m =false;
  var n =false;

  for(var i=0; i < array.length; i++){
    if (array[i] === 'Enero'){
      arreglo.push(array[i]);
      e=true;

    } else if(array[i] === 'Marzo'){
      arreglo.push(array[i]);
      m=true;

    } else if(array[i] === 'Noviembre'){
      arreglo.push(array[i]);
      n=true;

    }

     
    }

  if ( !e || !m || !n) return "No se encontraron los meses pedidos";
   
  
  return arreglo;
}

module.exports = mesesDelAño;
