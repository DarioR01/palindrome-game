import app, { closeServer } from "../index";
import supertest from "supertest";

const PALINDROMES = [
  { name: "Daniel", word: "bob" },
  { name: "Anna", word: "racecar" },
  { name: "Eve", word: "level" },
  { name: "Otto", word: "deified" },
  { name: "Hannah", word: "civic" },
  { name: "James", word: "A man, a plan, a canal, Panama" },
  { name: "Tom", word: "121" },
];

describe("route - /api/insertScore", () => {
  afterAll(() => {
    closeServer();
  });

  it("should correctly score palindrome words", async () => {
    const res = await supertest(app)
      .post("/api/submitEntry")
      .expect("Content-Type", /json/)
      .send({ name: "Daniel", word: "bob" })
      .expect(200);

    expect(res.body.points).toEqual(3);
  });
});

describe("route - api/getScores", () => {
  afterAll(() => {
    closeServer();
  });

  beforeEach(async () => {
    await Promise.all(
      PALINDROMES.map((palindrome) =>
        supertest(app).post("/api/submitEntry").send(palindrome)
      )
    );
  });

  it("should correctly get the top 5 palindrome scores", async () => {
    const res = await supertest(app)
      .get("/api/getScores")
      .expect("Content-Type", /json/);

    expect(res.body).toEqual([
      { name: "Anna", points: 7 },
      { name: "Otto", points: 7 },
      { name: "Eve", points: 5 },
      { name: "Hannah", points: 5 },
      { name: "Daniel", points: 3 },
    ]);
  });
});
