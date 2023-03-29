import Record from "../database/record.js";
import { test, expect, describe } from "vitest";

describe("Record", () => {
  const columns = { name: "string", quantity: "int" };

  test("constructor should assign values", () => {
    const record = new Record({ name: "Apple", quantity: 20 }, columns);
    expect(record.name).toBe("Apple");
    expect(record.quantity).toBe(20);
  });

  test("constructor should throw error with invalid data type", () => {
    expect(() => {
      new Record({ name: "Apple", quantity: "not an int" }, columns);
    }).toThrowError("Invalid data type for column quantity");
  });

  test("constructor should throw error with invalid value", () => {
    expect(() => {
      new Record({ name: "Apple", quantity: 1000 }, columns);
    }).toThrowError("Invalid value for column quantity");
  });
});
