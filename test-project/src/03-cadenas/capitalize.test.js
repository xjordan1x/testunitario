const capitalizeString = require('./capitalize');

test('Convierte una cadena a título correctamente', () => {
  expect(capitalizeString('hola mundo')).toBe('Hola Mundo');
  expect(capitalizeString('este es un ejemplo')).toBe('Este Es Un Ejemplo');
});

test('Una cadena vacía debería devolver una cadena vacía', () => {
  expect(capitalizeString('')).toBe('');
});

test('Una cadena ya en título no debería cambiar', () => {
  expect(capitalizeString('Hola Mundo')).toBe('Hola Mundo');
  expect(capitalizeString('Este Es Un Ejemplo')).toBe('Este Es Un Ejemplo');
});

test('Lanza un error si el argumento no es una cadena de texto', () => {
  expect(() => {
    capitalizeString(123);
  }).toThrow('El argumento debe ser una cadena de texto');
});
