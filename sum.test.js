const sumaingresovalores = require('./Pruebafunciones');

test('probando la funcion suma 1 + 2 to equal 3', () => {
  expect(sumaingresovalores(1, 2)).toBe(3);
});
