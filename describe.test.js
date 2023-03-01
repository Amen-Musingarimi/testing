const Calculator = require('./describe');
const calculator = new Calculator();

describe('addition', () => {
  test('add function exists', () => {
    expect(calculator.add()).toBeDefined();
  });
  test('should be equal to 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });
  test('should be return null ', () => {
    expect(calculator.add(1)).toBeNull();
  });
});

describe('subtraction', () => {
  test('Subtraction function exists', () => {
    expect(calculator.subtract()).toBeDefined();
  });
  test('should be equal to 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });
  test('should be return null ', () => {
    expect(calculator.subtract(1)).toBeNull();
  });
});

describe('multiplication', () => {
  test('multiplication function exists', () => {
    expect(calculator.multiply()).toBeDefined();
  });
  test('should be equal to 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test('should be return null ', () => {
    expect(calculator.multiply(1)).toBeNull();
  });
});

describe('division', () => {
  test('division function exists', () => {
    expect(calculator.divide()).toBeDefined();
  });
  test('should be equal to 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('should be return null ', () => {
    expect(calculator.divide(1)).toBeNull();
  });
  test('division by zero error', () => {
    expect(() => {
      calculator.divide(2, 0);
    }).toThrow(new Error('division by zero error'));
  });
});
