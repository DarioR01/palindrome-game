import ScoreHeap from ".";
import { Score } from "../../types/score";

const TEST_SCORES: Score[] = [
  { name: "Alice", points: 85 },
  { name: "Bob", points: 92 },
  { name: "Charlie", points: 78 },
  { name: "Diana", points: 90 },
  { name: "Eve", points: 67 },
];

describe("Services - ScoreHeap", () => {
  let scoreHeap: ScoreHeap;

  beforeEach(() => {
    scoreHeap = new ScoreHeap();
    TEST_SCORES.forEach((score) => scoreHeap.insertScore(score));
  });

  it("should initialise an empty heap when the class is first created", () => {
    const TEST_HEAP = new ScoreHeap();
    expect(TEST_HEAP.getTopScore(5)).toEqual([]);
  });

  it("should correctly insert items in the heap", () => {
    scoreHeap.insertScore({ name: "Test", points: 79 });
    expect((scoreHeap as any).heap).toEqual([
      {
        name: "Bob",
        points: 92,
      },
      {
        name: "Diana",
        points: 90,
      },
      {
        name: "Test",
        points: 79,
      },
      {
        name: "Alice",
        points: 85,
      },
      {
        name: "Eve",
        points: 67,
      },
      {
        name: "Charlie",
        points: 78,
      },
    ]);
  });

  it("should correctly get the top n items from the heap", () => {
    expect(scoreHeap.getTopScore(3)).toEqual([
      { name: "Bob", points: 92 },
      { name: "Diana", points: 90 },
      { name: "Charlie", points: 78 },
    ]);
  });
});
