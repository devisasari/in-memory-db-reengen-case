import Table from "./table.js";

class DB {
  constructor() {
    this.tables = {};
  }

  createTable(name, columns) {
    if (this.tables[name]) {
      throw new Error(`Table ${name} already exists`);
    }

    this.tables[name] = new Table(columns);
  }

  getTable(name) {
    const table = this.tables[name];

    if (!table) {
      throw new Error(`Table ${name} does not exist`);
    }

    return table;
  }
}

export default DB;