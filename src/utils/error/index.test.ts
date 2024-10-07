import { Request, Response, NextFunction } from "express";
import { handleError } from ".";
import httpStatus from "http-status";

describe("Utils - handleError", () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      headersSent: false,
    } as unknown as Response;
    next = jest.fn();
  });

  it("should respond with BAD_REQUEST for standard Error instance", () => {
    const error = new Error("This is a standard error");
    handleError(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST);
    expect(res.json).toHaveBeenCalledWith({
      message: error.message,
    });
  });

  it("should respond with INTERNAL_SERVER_ERROR for unknown errors", () => {
    const error = { message: "Unknown error" };
    handleError(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(res.json).toHaveBeenCalledWith({
      message: "An unexpected error occurred.",
    });
  });
});
