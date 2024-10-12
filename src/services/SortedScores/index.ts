import { Score } from "../../types/score";

class SortedScores {
  private scores: Score[];

  constructor() {
    this.scores = [];
  }

  private binaryPositionSearch(score: Score): number {
    if (this.scores.length === 0) return 0;
    let left = 0;
    let right = this.scores.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.scores[mid].points === score.points) {
        return mid + 1;
      } else if (this.scores[mid].points > score.points) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }

  private insertScore(score: Score) {
    const pos = this.binaryPositionSearch(score);
    this.scores.splice(pos, 0, score);
  }

  private updateScore(score: Score, existingIndex: number) {
    // Do not update the points if the user would score less points than he previously did.
    if (this.scores[existingIndex].points >= score.points) return;
    this.scores.splice(existingIndex, 1);
    this.insertScore(score);
  }

  insertOrUpdateScore(score: Score) {
    const isExistingItemIndex = this.scores.findIndex(
      (existingScore) => existingScore.name === score.name
    );
    if (isExistingItemIndex !== -1) {
      this.updateScore(score, isExistingItemIndex);
    } else {
      this.insertScore(score);
    }
  }

  getTopScore(limit: number): Score[] {
    return this.scores.slice(0, limit);
  }
}

export default SortedScores;
