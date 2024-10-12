import SortedScores from ".";
import { Score } from "../../types/score";

const TEST_SCORES: Score[] = [
  { name: "Alice", points: 85 },
  { name: "Bob", points: 92 },
  { name: "Charlie", points: 78 },
  { name: "Diana", points: 90 },
  { name: "Eve", points: 67 },
];

describe("Services - ScoreHeap", () => {
  let scores: SortedScores;

  beforeEach(() => {
    scores = new SortedScores();
    TEST_SCORES.forEach((score) => scores.insertOrUpdateScore({ ...score }));
  });

  it("should initialise an empty scores when the class is first created", () => {
    const TEST_HEAP = new SortedScores();
    expect(TEST_HEAP.getTopScore(5)).toEqual([]);
  });

  it("should correctly insert items in the scores", () => {
    scores.insertOrUpdateScore({ name: "Test", points: 79 });
    expect((scores as any).scores).toEqual([
      {
        name: "Bob",
        points: 92,
      },
      {
        name: "Diana",
        points: 90,
      },
      {
        name: "Alice",
        points: 85,
      },
      {
        name: "Test",
        points: 79,
      },
      {
        name: "Charlie",
        points: 78,
      },

      {
        name: "Eve",
        points: 67,
      },
    ]);
  });

  it("should correctly update the score of a user when they scored more points than previous round", () => {
    scores.insertOrUpdateScore({ name: "Charlie", points: 102 });
    expect((scores as any).scores).toEqual([
      { name: "Charlie", points: 102 },
      { name: "Bob", points: 92 },
      { name: "Diana", points: 90 },
      { name: "Alice", points: 85 },
      { name: "Eve", points: 67 },
    ]);
  });

  it("should not update the score of a user when they scored less points than previous rounds", () => {
    scores.insertOrUpdateScore({ name: "Charlie", points: 78 });
    expect((scores as any).scores).toEqual([
      { name: "Bob", points: 92 },
      { name: "Diana", points: 90 },
      { name: "Alice", points: 85 },
      { name: "Charlie", points: 78 },
      { name: "Eve", points: 67 },
    ]);
  });

  it("should correctly get the top n items from the scores", () => {
    expect(scores.getTopScore(3)).toEqual([
      { name: "Bob", points: 92 },
      { name: "Diana", points: 90 },
      { name: "Alice", points: 85 },
    ]);
  });
});
