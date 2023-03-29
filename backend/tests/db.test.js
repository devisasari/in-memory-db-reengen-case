import DB from "../database/db.js";
import { test, expect, describe, beforeEach } from "vitest";

describe("DB", () => {
  let db;

  beforeEach(() => {
    db = new DB();
  });

  describe("createTable()", () => {
    test("should create a new table", () => {
      const tableName = "fruit";
      const columns = { name: "string", quantity: "int" };

      db.createTable(tableName, columns);
      const table = db.tables[tableName];

      expect(table).toBeDefined();
      expect(table.columns).toEqual(columns);
    });

    test("should throw an error if the table already exists", () => {
      const tableName = "fruit";
      const columns = { name: "string", quantity: "int" };

      db.createTable(tableName, columns);

      expect(() => {
        db.createTable(tableName, columns);
      }).toThrow(`Table ${tableName} already exists`);
    });
  });

  describe("getTable()", () => {
    test("should return a table by name", () => {
      const tableName = "fruit";
      const columns = { name: "string", quantity: "int" };

      db.createTable(tableName, columns);
      const table = db.getTable(tableName);

      expect(table).toBeDefined();
      expect(table.columns).toEqual(columns);
    });

    test("should throw an error if the table does not exist", () => {
      const tableName = "fruit";

      expect(() => {
        db.getTable(tableName);
      }).toThrow(`Table ${tableName} does not exist`);
    });
  });

  describe("creating multiple databases and tables", () => {
    test("should create multiple databases with multiple tables", () => {
      // create first database
      const db1 = new DB();
      db1.createTable("table1", { name: "string", age: "int" });
      db1.createTable("table2", { name: "string", address: "string" });

      // create second database
      const db2 = new DB();
      db2.createTable("table3", { name: "string", email: "string" });
      db2.createTable("table4", { name: "string", phone: "string" });

      // verify first database and tables
      expect(db1.getTable("table1").columns).toEqual({
        name: "string",
        age: "int",
      });
      expect(db1.getTable("table2").columns).toEqual({
        name: "string",
        address: "string",
      });

      // verify second database and tables
      expect(db2.getTable("table3").columns).toEqual({
        name: "string",
        email: "string",
      });
      expect(db2.getTable("table4").columns).toEqual({
        name: "string",
        phone: "string",
      });
    });
  });
});
