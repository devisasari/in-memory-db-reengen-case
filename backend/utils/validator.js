class Validator {
  static isValidType(value, type) {
    if (type === 'int') {
      return Number.isInteger(value);
    } else if (type === 'string') {
      return typeof value === 'string';
    } else {
      throw new Error(`Invalid column type: ${type}`);
    }
  }

  static isValidValue(value, type) {
    if (type === 'int') {
      return value >= -999 && value <= 999;
    } else if (type === 'string') {
      return value.length <= 255;
    } else {
      throw new Error(`Invalid column type: ${type}`);
    }
  }
}

export default Validator;