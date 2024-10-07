import express from "express";
import {
  getTopScoreController,
  insertScoreController,
} from "../controllers/scores";

const router = express.Router();

router.get("/getScores", getTopScoreController);

router.post("/submitEntry", insertScoreController);

export default router;
