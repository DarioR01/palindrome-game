import { Request, Response, NextFunction } from "express";
import { palindromeRoundMiddleware } from ".";
import { isValidAlphanumString } from "../../utils/validation/string";
import { handleError } from "../../utils/error";

jest.mock("../../utils/validation/string");
jest.mock("../../utils/error");

describe("", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  it("should test that body property 'word' is a valid alphanumeric character", () => {
    const TEST_WORD = "valid123";
    const TEST_NAME = "Daniel";
    const EXPECTED_LABEL = "word";
    req.body = { name: TEST_NAME, word: TEST_WORD };

    //@ts-ignore
    isValidAlphanumString.mockImplementation(() => {});

    palindromeRoundMiddleware(req as Request, res as Response, next);
    expect(isValidAlphanumString).toHaveBeenCalledWith(
      TEST_WORD,
      EXPECTED_LABEL
    );
  });

  it("should test that body property 'name' is a valid alphanumeric character", () => {
    const TEST_WORD = "valid123";
    const TEST_NAME = "Daniel";
    const EXPECTED_LABEL = "name";
    req.body = { name: TEST_NAME, word: TEST_WORD };

    //@ts-ignore
    isValidAlphanumString.mockImplementation(() => {});

    palindromeRoundMiddleware(req as Request, res as Response, next);
    expect(isValidAlphanumString).toHaveBeenCalledWith(
      TEST_NAME,
      EXPECTED_LABEL
    );
  });

  it("should call the next function if body is valid", () => {
    const TEST_WORD = "valid123";
    const TEST_NAME = "Daniel";
    const EXPECTED_LABEL = "name";
    req.body = { name: TEST_NAME, word: TEST_WORD };

    //@ts-ignore
    isValidAlphanumString.mockImplementation(() => {});

    palindromeRoundMiddleware(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
  });

  it("should send an error response if body is not valid", () => {
    const TEST_WORD = 123;
    const TEST_NAME = "";
    const TEST_ERROR = "test error";
    req.body = { name: TEST_NAME, word: TEST_WORD };

    //@ts-ignore
    isValidAlphanumString.mockImplementation(() => {
      throw new Error(TEST_ERROR);
    });

    //@ts-ignore
    handleError.mockImplementation(() => {});

    palindromeRoundMiddleware(req as Request, res as Response, next);

    expect(handleError).toHaveBeenCalled;
  });
});
