function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   
   //console.log(sortBy);
   // console.log(list);
    list.sort((objeto1, objeto2) => {
        // Comparamos las propiedades correspondientes en función de la letra recibida
        if (objeto1[sortBy] < objeto2[sortBy]) {
          return 1; // Indicamos que objeto1 debe estar después de objeto2
        } else if (objeto1[sortBy] > objeto2[sortBy]) {
          return -1; // Indicamos que objeto1 debe estar antes de objeto2
        } else {
          return 0; // Indicamos que los objetos tienen el mismo valor en la propiedad
        }
      });
   // console.log(list);
   return list;

}

module.exports = sort;
