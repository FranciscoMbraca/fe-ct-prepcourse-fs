function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  //var  cal = objetoProducto.calcularPrecioDescuento;
 
  objetoProducto.calcularPrecioDescuento = function() 
  {
    var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
    var preciof =  objetoProducto.precio - descuento;
  //  console.log(preciof);
 // storeItem.calcularPrecioDescuento
  
    return preciof;
   
  };
//return objetoProducto.calcularPrecioDescuento;
 

}

/*const storeItem = {
  precio: 5,
  porcentajeDeDescuento: 0.5
};


agregarMetodoCalculoDescuento(storeItem);
console.log(storeItem);*/

 

module.exports = agregarMetodoCalculoDescuento;
