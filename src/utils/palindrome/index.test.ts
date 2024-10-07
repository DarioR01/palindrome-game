import { formatWord, isPalindrome, scorePalindrome } from ".";

const PALINDROMES = [
  { word: "racecar", score: 7 },
  { word: "level", score: 5 },
  { word: "madam", score: 5 },
  { word: "A man a plan a canal Panama", score: 21 },
  { word: "Was it a car or a cat I saw", score: 19 },
  { word: "No lemon no melon", score: 14 },
  { word: "12321", score: 5 },
];

const NON_PALINDROMES = [
  { word: "apple", score: 5 },
  { word: "banana", score: 6 },
  { word: "orange", score: 6 },
  { word: "Hello world", score: 10 },
  { word: "JavaScript is fun", score: 15 },
  { word: "I love coding", score: 11 },
  { word: "452", score: 3 },
];

const NON_PALINDROME_SCORE = 0;

describe("Utils - isPalindrome", () => {
  PALINDROMES.forEach((palindrome) => {
    test(`should correctly identify palindromes: ${palindrome.word}`, () => {
      expect(isPalindrome(palindrome.word)).toBeTruthy;
    });
  });

  NON_PALINDROMES.forEach((nonPalindrome) => {
    test(`should correctly identify non-palindromes: ${nonPalindrome.word}`, () => {
      expect(isPalindrome(nonPalindrome.word)).toBeFalsy();
    });
  });

  it("should correctly identify that an empty string is not a palindrome", () => {
    const TEST_WORD = " ";
    expect(isPalindrome(TEST_WORD)).toBeFalsy();
  });

  it("should correctly identify that a single letter string is not a palindrome", () => {
    const TEST_WORD = "a";
    expect(isPalindrome(TEST_WORD)).toBeFalsy();
  });
});

describe("Utils - scorePalindrome", () => {
  PALINDROMES.forEach((palindrome) => {
    test(`should correctly score palindromes based on number of characters: ${palindrome.word}`, () => {
      expect(scorePalindrome(palindrome.word)).toBe(palindrome.score);
    });
  });

  it("should correctly score a non palindrome word", () => {
    const TEST_WORD = "test";
    expect(scorePalindrome(TEST_WORD)).toBe(NON_PALINDROME_SCORE);
  });
});

describe("Utils - formatWord", () => {
  it("should correctly format string by removing spaces", () => {
    const TEST_WORD = "  hello world  ";
    const EXPECTED_WORD = "helloworld";
    expect(formatWord(TEST_WORD)).toEqual(EXPECTED_WORD);
  });

  it("should correctly format string by lower casing all letters", () => {
    const TEST_WORD = "HeLLOworLd";
    const EXPECTED_WORD = "helloworld";
    expect(formatWord(TEST_WORD)).toEqual(EXPECTED_WORD);
  });
});
