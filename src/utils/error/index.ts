import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export const handleError = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof Error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
    return;
  }

  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: "An unexpected error occurred." });
  return;
};
