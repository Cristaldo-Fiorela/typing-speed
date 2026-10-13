
export type Sentence = {
  id: string;
  text: string;
};

export type Data = {
  hard: Sentence[];
  medium: Sentence[];
  easy: Sentence[];
}

export const DIFFICULTY_LEVELS = ["easy", "medium", "hard"] as const;

export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

export const MODE_TYPE = ["timed", "passage"] as const;

export type ModeType = typeof MODE_TYPE[number];