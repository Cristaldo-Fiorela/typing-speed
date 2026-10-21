import { CharStatus } from "@/types/types"

const CHAR_STATUS_STYLES: Record<CharStatus, string> = {
  correct: "text-green-500",
  incorrect: "text-red-500 underline",
  current: "bg-neutral-800 text-neutral-500 animate-[blink_1s_step-end_infinite]",
  pending: "text-neutral-500",
}

export {
  CHAR_STATUS_STYLES,
}