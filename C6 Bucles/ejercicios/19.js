function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var p =0;
  
  for(let i = 0; i <= n; i++){

    p  = p+i;
     
  }
  return Math.abs(p);
}

module.exports = sumarHastaN;
