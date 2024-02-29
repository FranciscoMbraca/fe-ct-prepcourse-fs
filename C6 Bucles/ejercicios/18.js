function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var p = 1;
  for(let i = a; i <= b; i++){

    p *= i;
     
  }
  return Math.abs(p);
 
}

module.exports = productoEntreNúmeros;