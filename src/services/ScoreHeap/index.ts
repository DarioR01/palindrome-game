import { Score } from "../../types/score";

// Max Heap Implementation which stores user name and points, sorted by points.
export default class ScoreHeap {
  private heap: Score[];

  constructor() {
    this.heap = [];
  }

  // untility function to get the parent of a given node index in the heap.
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  insertScore(score: Score): void {
    this.heap.push(score);
    if (this.heap.length === 0) return;

    let newElementIndex = this.heap.length - 1;
    let parentIndex = this.parent(newElementIndex);

    while (
      parentIndex >= 0 &&
      this.heap[newElementIndex].points > this.heap[parentIndex].points
    ) {
      this.heap[newElementIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = score;

      newElementIndex = parentIndex;
      parentIndex = this.parent(newElementIndex);
    }
  }

  // get the top n scores stored in the heap. The limit controls how many items should be read from the heap.
  getTopScore(limit: number): Score[] {
    const topItems = this.heap.slice(0, limit);
    return topItems.sort((a, b) => b.points - a.points);
  }
}
