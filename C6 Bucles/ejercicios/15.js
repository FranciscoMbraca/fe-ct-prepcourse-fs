function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  const diaSemana = ['','Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
 switch (numero){
  case 1:
    return diaSemana[numero];
  case 2:
    return diaSemana[numero];
  case 3:
    return diaSemana[numero];
  case 4:
    return diaSemana[numero];
  case 5:
    return diaSemana[numero];
  case 6:
    return diaSemana[numero];
  case 7:
      return diaSemana[numero];
  default:
    return "No es un dia de la semana";

  }


} 

module.exports = obtenerDiaSemana;