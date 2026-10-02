
type Difficulty = {
  id: string;
  text: string;
};

export type Data = {
  hard: Difficulty[];
  medium: Difficulty[];
  easy: Difficulty[];
}

export type DifficultyLevel = "easy" | "medium" | "hard";