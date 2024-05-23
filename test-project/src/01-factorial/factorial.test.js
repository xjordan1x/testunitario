const factorial = require("./factorial");

test("calcula el factorial de 5", () => {
  expect(factorial(5)).toBe(120);
});

test("calcula el factorial de 0", () => {
  expect(factorial(0)).toBe(1);
});

test("calcula el factorial de un número negativo", () => {
  expect(factorial(-1)).toBeNaN();
});
