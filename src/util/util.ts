/**
 * Clamps a value between an upper and lower bound
 * @param value The value to be clamped, if necessary
 * @param min The minimum allowed value
 * @param max The maximum allowed value
 */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;

  if (value > max) return max;

  return value;
}

/**
 * Returns the deep copy of an array
 * @param array The array to be deep copied
 */
export function deepCopyArray(array: unknown[]): unknown {
  return array.map((el) => {
    if (Array.isArray(el)) {
      return deepCopyArray(el);
    }
    return el;
  });
}

/**
 * Pauses execution for a certain number of milliseconds
 * @param ms Number of milliseconds to pause
 */
export async function sleep(ms: number): Promise<void> {
  if (ms === 0) return;

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Returns a random integer between a `min` and `max` value (inclusive)
 * @param min The minimum value in the range
 * @param max The maximum value in the range
 */
export function random(min: number, max: number): number {
  if (min > max) {
    throw new Error('min param MUST be less or equal to max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param arr The array to be shuffled
 */
export function shuffle<T>(arr: T[]): T[] {
  const arrCopy = deepCopyArray(arr) as T[];

  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = random(0, i);

    const temp = arrCopy[i];
    arrCopy[i] = arrCopy[j];
    arrCopy[j] = temp;
  }

  return arrCopy;
}
