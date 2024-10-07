import express from "express";
import {
  getTopScoreController,
  insertScoreController,
} from "../controllers/scores";
import { palindromeRoundMiddleware } from "../middlewares/palindromeRoundMiddleware";

const router = express.Router();

router.get("/getScores", getTopScoreController);

router.post("/submitEntry", palindromeRoundMiddleware, insertScoreController);

export default router;
