import Validator from "../utils/validator.js";
import { test, expect, describe } from "vitest";

describe("Validator", () => {
  test("isValidType should return true for valid types", () => {
    expect(Validator.isValidType("Apple", "string")).toBe(true);
    expect(Validator.isValidType(20, "int")).toBe(true);
  });

  test("isValidType should throw error for invalid type", () => {
    expect(() => {
      Validator.isValidType("Apple", "invalidType");
    }).toThrowError("Invalid column type: invalidType");
  });

  test("isValidValue should return true for valid values", () => {
    expect(Validator.isValidValue("Apple", "string")).toBe(true);
    expect(Validator.isValidValue(20, "int")).toBe(true);
    expect(Validator.isValidValue(-999, "int")).toBe(true);
    expect(Validator.isValidValue(999, "int")).toBe(true);
  });

  test("isValidValue should return false for invalid values", () => {
    expect(Validator.isValidValue("a".repeat(256), "string")).toBe(false);
    expect(Validator.isValidValue(1000, "int")).toBe(false);
    expect(Validator.isValidValue(-1000, "int")).toBe(false);
  });

  test("isValidValue should throw error for invalid type", () => {
    expect(() => {
      Validator.isValidValue("Apple", "invalidType");
    }).toThrowError("Invalid column type: invalidType");
  });
});
