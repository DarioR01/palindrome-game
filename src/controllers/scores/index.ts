import { Request, Response } from "express";
import SortedScores from "../../services/SortedScores";
import { PalindromeRound } from "../../types/score";
import { scorePalindrome } from "../../utils/palindrome";

// Initialise the sorted score instance outside of the controllers to maintain a persistent in-memory storage for scores.
const scores = new SortedScores();

export const insertScoreController = (req: Request, res: Response) => {
  const wordSubmission: PalindromeRound = req.body;

  const points = scorePalindrome(wordSubmission.word);

  scores.insertOrUpdateScore({ name: wordSubmission.name, points });
  res.json({ points });
};

export const getTopScoreController = (_req: Request, res: Response) => {
  const SCORE_LIMIT = 5;
  res.json(scores.getTopScore(SCORE_LIMIT));
};
