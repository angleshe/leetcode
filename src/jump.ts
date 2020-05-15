export function jump(nums: number[]): number {
  let step: number = 0;
  let end: number = 0;
  let max: number = 0;
  for (let i: number = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (end === i) {
      end = max;
      step++;
    }
  }
  return step;
}
