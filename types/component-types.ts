import { Dispatch, SetStateAction } from "react";
import { DifficultyLevel, ModeType, Sentence } from "./types";

export type ScoreBarProps = {
  difficulty: DifficultyLevel;
  setDifficulty: Dispatch<SetStateAction<DifficultyLevel>>;
  mode: ModeType;
  setMode: Dispatch<SetStateAction<ModeType>>;
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
  active?: boolean;
};
