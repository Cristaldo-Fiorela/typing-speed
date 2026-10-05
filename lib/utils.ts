
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

export {
  getRandomItem,
}