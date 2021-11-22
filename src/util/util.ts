export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;

  if (value > max) return max;

  return value;
}

export function deepCopyArray(array: unknown[]): unknown {
  return array.map((el) => {
    if (Array.isArray(el)) {
      return deepCopyArray(el);
    }
    return el;
  });
}

export async function sleep(ms: number): Promise<void> {
  if (ms === 0) return;

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function random(min: number, max: number): number {
  if (min >= max) {
    throw new Error('min param MUST be less than max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
