import { Score } from "../../types/score";

export default class ScoreHeap {
  private heap: Score[];

  constructor() {
    this.heap = [];
  }

  private parent(index: number): number {
    return 0;
  }

  insertScore(score: Score): void {}

  getTopScore(limit: number): Score[] {
    return [];
  }
}
