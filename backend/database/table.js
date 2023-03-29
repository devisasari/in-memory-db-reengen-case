import Record from './record.js';
import Validator from '../utils/validator.js';

class Table {
  constructor(columns) {
    this.columns = columns;
    this.records = [];
  }

  insertRecords(data) {
    if (Array.isArray(data)) {
      data.forEach(record => this.insertRecord(record));
    } else {
      this.insertRecord(data);
    }
  }

  insertRecord(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        if (!Validator.isValidType(value, this.columns[key])) {
          throw new Error(`Invalid data type for column ${key}`);
        }

        if (!Validator.isValidValue(value, this.columns[key])) {
          throw new Error(`Invalid value for column ${key}`);
        }
      }
    }

    const record = new Record(data, this.columns);
    this.records.push(record);
  }

  getAllRecords() {
    return this.records;
  }

  filterRecords(filters) {
    return this.records.filter(record => {
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          const value = filters[key];

          if (record[key] !== value) {
            return false;
          }
        }
      }

      return true;
    });
  }
}

export default Table;