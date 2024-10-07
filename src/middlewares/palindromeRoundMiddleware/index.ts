import { Request, Response, NextFunction } from "express";
import { isValidAlphanumString } from "../../utils/validation/string";
import { PalindromeRound } from "../../types/score";

// middleware testing the validity of the body recieved in api/submitEntry.
// Only alpha-numeric characters and spaces are allowed in this game.
export const palindromeRoundMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const body: PalindromeRound = req.body;
    isValidAlphanumString(body.name, "name");
    isValidAlphanumString(body.word, "word");
    next();
  } catch (err: unknown) {
    next(err);
  }
};
