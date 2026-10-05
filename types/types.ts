
type Sentence = {
  id: string;
  text: string;
};

export type Data = {
  hard: Sentence[];
  medium: Sentence[];
  easy: Sentence[];
}

export type DifficultyLevel = "easy" | "medium" | "hard";