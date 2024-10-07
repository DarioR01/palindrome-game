import { isValidAlphanumString } from ".";

describe("Utils - isValidAlphanumString", () => {
  it("should not throw an error for valid alphanumeric strings", () => {
    const TEST_WORD = "valid123";
    expect(() => isValidAlphanumString(TEST_WORD, "test")).not.toThrow();
  });

  it("should throw an error for invalid strings", () => {
    const TEST_WORD = "valid!@#";
    expect(() => isValidAlphanumString("invalid!@#", "test")).toThrow(
      '"test" must only contain alpha-numeric characters'
    );
  });

  it("should throw an error for empty strings", () => {
    const TEST_WORD = "";
    expect(() => isValidAlphanumString("", "test")).toThrow(
      "is not allowed to be empty"
    );
  });
});
