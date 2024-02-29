
const agregarMetodoCalculoDescuento = require("../ejercicios/21");

const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};
const storeItem2 = {
  precio: 5,
  porcentajeDeDescuento: 0.5,
};

test("Debe agregar la propiedad 'calcularPrecioDescuento' al objetoProducto", function () {
  agregarMetodoCalculoDescuento(storeItem);
  agregarMetodoCalculoDescuento(storeItem2);
  
  expect(storeItem).toHaveProperty("calcularPrecioDescuento");
  expect(storeItem2).toHaveProperty("calcularPrecioDescuento");
});

test('Debe devolver el precio con descuento del producto', function () {
  agregarMetodoCalculoDescuento(storeItem);
  agregarMetodoCalculoDescuento(storeItem2);
  
  expect(storeItem.calcularPrecioDescuento()).toBe(72);  
  expect(storeItem2.calcularPrecioDescuento()).toBe(2.5);
});



/*const agregarMetodoCalculoDescuento = require("../ejercicios/21");

const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};
const storeItem2 = {
  precio: 5,
  porcentajeDeDescuento: 0.5,
};

test("Debe agregar la propiedad 'calcularPrecioDescuento' al objetoProducto", function () {
  expect(
     agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento
  ).toBeDefined();
  expect(
     agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento
  ).toBeDefined();
});

test('Debe devolver el precio con descuento del producto', function () {
  expect(
     agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()
  ).toBe(72);  
  expect(
     agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()
  ).toBe(2.5);
});*/