/**
 * @param array array of items
 * @returns one (1) random item of the array
 */
function getRandomItem<T>(array: T[]): T {
  if (array.length === 0) {
    throw new Error("The array is empty. Cannot select a random item.");
  }
  const RANDOM_INDEX = Math.floor(Math.random() * (array.length - 1));
  return array[RANDOM_INDEX];
}

/**
 * 
 * @param total_char total typed char without mistakes
 * @param time total SECONDS time counter
 * @returns grooss WPM
 */
function getGrossWPM(total_char: number, time: number): number {
  if (time <= 0) return 0;

  return (total_char / 5) * (60 / time);
}

/**
 * 
 * @param gross_wpm gross wpm
 * @param total_errors total mistakes
 * @param time total SECONDS time
 * @returns net WPM
 */
function getNetWPM(gross_wpm: number, total_errors: number, time: number): number {
  if (time <= 0) return 0;

  const errorsPerMinute = total_errors * (60 / time);

  return Math.max(0, gross_wpm - errorsPerMinute);
}


/**
 * 
 * @param total_errors errors
 * @param total_char typed char
 * @returns accuracy
 */
function getAccuracy(total_errors: number, total_char: number): number {
  const totalTyped = total_char + total_errors;
  if (totalTyped <= 0) return 100;
  return (total_char / totalTyped) * 100;
}

function formatWPM(wpm: number): number {
  return Math.round(wpm);
}

export {
  getRandomItem,
  getGrossWPM,
  getNetWPM,
  getAccuracy,
  formatWPM,
}