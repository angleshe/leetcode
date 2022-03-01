export function findMaxConsecutiveOnes(nums: number[]): number {
  let res: number = 0;
  let count: number = 0;
  nums.forEach((item) => {
    if (item === 1) {
      count++;
    } else {
      res = Math.max(res, count);
      count = 0;
    }
  });
  return Math.max(res, count);
}
