import Validator from "../utils/validator.js";

class Record {
  constructor(data, columns) {
    this.validateData(data, columns);
    Object.assign(this, data);
  }

  validateData(data, columns) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        if (!Validator.isValidType(value, columns[key])) {
          throw new Error(`Invalid data type for column ${key}`);
        }

        if (!Validator.isValidValue(value, columns[key])) {
          throw new Error(`Invalid value for column ${key}`);
        }
      }
    }
  }
}

export default Record;