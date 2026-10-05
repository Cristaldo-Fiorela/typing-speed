import { useState } from "react";

import data from "@/data/data.json";
import { DifficultyLevel, Sentence } from "@/types/types";
import { getRandomItem } from "@/lib/utils";

const useOneSentence = (difficulty: DifficultyLevel) => {
  const [sentence, setSentence] = useState<Sentence | null>(null);

  const getRandomSentence = () => {
    const randomSentence = getRandomItem(data[difficulty]);
    setSentence(randomSentence);
  }

  return {
    sentence,
    getRandomSentence,
  };
}

export {
  useOneSentence,
}