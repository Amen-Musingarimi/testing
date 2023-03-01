class Calculator {
  add(num1, num2) {
    if (num1 == null || num2 == null) {
      return null;
    }
    return num1 + num2;
  }

  subtract(num1, num2) {
    if (num1 == null || num2 == null) {
      return null;
    }
    return num1 - num2;
  }

  divide(num1, num2) {
    if (num1 == null || num2 == null) {
      return null;
    } else if (num2 == 0) {
      throw new Error('division by zero error');
    } else {
      return num1 / num2;
    }
  }
  multiply(num1, num2) {
    if (num1 == null || num2 == null) {
      return null;
    }
    return num1 * num2;
  }
}

module.exports = Calculator;
