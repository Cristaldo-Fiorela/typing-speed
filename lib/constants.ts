import { CharStatus, ResultInfoType, ResultsType } from "@/types/types"

const CHAR_STATUS_STYLES: Record<CharStatus, string> = {
  correct: "text-green-500",
  incorrect: "text-red-500 underline",
  current: "bg-neutral-800 text-neutral-500 animate-[blink_1s_step-end_infinite]",
  pending: "text-neutral-500",
}

const RESULTS_INFO: Record<ResultsType, ResultInfoType> = {
  baseline: {
    icon: "/icons/icon-completed.svg",
    title: "Baseline Stablished!",
    message: "You've set the bar. Now the real challenge begins- time to beat it.",
  },
  completed: {
    icon: "/icons/icon-completed.svg",
    title: "Test Complete!",
    message: "Solid run. Keep pushing to beat your high score.",
  },
  personalbest: {
    icon: "/icons/icon-personal-best.svg",
    title: "High Score Smashed!",
    message: "You' re getting faster. That was incredible typing.",
  },
}

export {
  CHAR_STATUS_STYLES,
  RESULTS_INFO
}