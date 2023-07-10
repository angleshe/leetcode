export function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>();
  map.set(0, -1);
  let res: number = 0;
  nums.reduce((prev, curr, index) => {
    if (curr === 0) {
      prev--;
    } else {
      prev++;
    }
    if (map.has(prev)) {
      res = Math.max(res, index - map.get(prev)!);
    } else {
      map.set(prev, index);
    }
    return prev;
  }, 0);

  return res;
}
