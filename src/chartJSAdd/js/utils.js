/**
 * Check if all values in an array are 0
 *
 * @param arr {Array<number>} Array to check
 * @returns {boolean} True if all values are 0, false otherwise
 */
export function isArrayAllZero(arr) {
  return arr.every((el) => el === 0);
}
