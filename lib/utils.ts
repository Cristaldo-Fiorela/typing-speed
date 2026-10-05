
/**
 * @param array array of items
 * @returns one (1) random item of the array
 */
function getRandomItem<T>(array: T[]): T | void {
  if (array.length === 0) {
    return console.error("The array is empty. Cannot select a random item.");
  } else {
    const RANDOM_INDEX = Math.floor(Math.random() * (array.length - 1));
    return array[RANDOM_INDEX];
  }
}

export {
  getRandomItem,
}