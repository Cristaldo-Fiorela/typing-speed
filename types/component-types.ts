import { Dispatch, SetStateAction } from "react";
import { DifficultyLevel, Sentence } from "./types";

export type ScoreBarProps = {
  setDifficulty: Dispatch<SetStateAction<DifficultyLevel>>;
};

export type TypingAreaProps = {
  difficulty: DifficultyLevel;
};

export type TypingTestProps = {
  sentence: Sentence;
};

export type SquareButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  fill?: boolean;
};
