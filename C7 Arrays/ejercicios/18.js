function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var promedio=0;
  for(var i =0; i< resultadosTest.length;i++){
    promedio = resultadosTest[i] + promedio;
    } 
     return promedio/i;

}

module.exports = promedioResultadosTest;
