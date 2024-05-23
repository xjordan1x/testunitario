const esPrimo = require('./esPrimo');

test('Número primo devuelve true', () => {
  expect(esPrimo(7)).toBe(true);
});

test('Número no primo devuelve false', () => {
  expect(esPrimo(6)).toBe(false);
});

test('Número 1 no es primo', () => {
  expect(esPrimo(1)).toBe(false);
});
