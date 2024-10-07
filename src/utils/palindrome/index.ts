export const formatWord = (word: string) => {
  return word.replace(/\s+/g, "").toLowerCase();
};

export const isPalindrome = (word: string): boolean => {
  const formattedWord = formatWord(word);

  if (formattedWord.length <= 1) return false;

  let left = 0;
  let right = formattedWord.length - 1;

  while (left < right) {
    if (formattedWord[left] !== formattedWord[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
};

export const scorePalindrome = (word: string): number => {
  const formattedWord = formatWord(word);
  if (isPalindrome(word)) return formattedWord.length;
  return 0;
};
