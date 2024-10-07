import Joi from "joi";
import { formatWord } from "../../palindrome";

export const isValidAlphanumString = (word: string, label: string) => {
  const formattedWord = formatWord(word);

  const schema = Joi.string().alphanum().required().label(label);

  const { error } = schema.validate(formattedWord);

  if (error) {
    throw new Error(error.message);
  }
};
