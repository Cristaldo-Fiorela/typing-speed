import { DifficultyLevel, ModeType, Sentence } from "./types";

export type ScoreBarProps = {
  difficulty: DifficultyLevel;
  mode: ModeType;
  formatedCounter: string;
  handleDifficultyChange: (level: DifficultyLevel) => void;
  handleModeChange: (mode: ModeType) => void;
};

export type TypingAreaProps = {
  isRunning: boolean;
  sentence: Sentence | null;
  handleStart: () => void;
};

export type TypingTestProps = {
  sentence: Sentence;
};

export type SquareButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  fill?: boolean;
  active?: boolean;
};
