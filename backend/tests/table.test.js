import Table from "../database/table.js";
import { test, expect, describe, beforeEach } from "vitest";

describe("Table", () => {
  let table;

  beforeEach(() => {
    table = new Table({
      name: "string",
      quantity: "int",
    });
  });

  test("insertRecords should add one record", () => {
    table.insertRecords({ name: "Apple", quantity: 20 });
    expect(table.records).toHaveLength(1);
  });

  test("insertRecords should add multiple records", () => {
    table.insertRecords([
      { name: "Apple", quantity: 20 },
      { name: "Banana", quantity: 10 },
    ]);
    expect(table.records).toHaveLength(2);
  });

  test("insertRecord should add one record", () => {
    table.insertRecord({ name: "Apple", quantity: 20 });
    expect(table.records).toHaveLength(1);
  });

  test("insertRecord should throw error with invalid data type", () => {
    expect(() => {
      table.insertRecord({ name: "Apple", quantity: "not an int" });
    }).toThrowError("Invalid data type for column quantity");
  });

  test("insertRecord should throw error with invalid value", () => {
    expect(() => {
      table.insertRecord({ name: "Apple", quantity: 1000 });
    }).toThrowError("Invalid value for column quantity");
  });

  test("getAllRecords should return all records", () => {
    table.insertRecord({ name: "Apple", quantity: 20 });
    table.insertRecord({ name: "Banana", quantity: 10 });
    const records = table.getAllRecords();
    expect(records).toHaveLength(2);
    expect(records[0].name).toBe("Apple");
    expect(records[0].quantity).toBe(20);
    expect(records[1].name).toBe("Banana");
    expect(records[1].quantity).toBe(10);
  });

  test("filterRecords should return matching records", () => {
    table.insertRecord({ name: "Apple", quantity: 20 });
    table.insertRecord({ name: "Banana", quantity: 10 });
    table.insertRecord({ name: "Apple", quantity: 5 });
    const records = table.filterRecords({ name: "Apple" });
    expect(records).toHaveLength(2);
    expect(records[0].name).toBe("Apple");
    expect(records[0].quantity).toBe(20);
    expect(records[1].name).toBe("Apple");
    expect(records[1].quantity).toBe(5);
  });
});
