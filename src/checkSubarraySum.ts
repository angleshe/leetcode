export function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) {
    return false;
  }

  const sums: number[] = [0];
  const set = new Set<number>();

  nums.forEach((value, index) => {
    sums.push(sums[index] + value);
  });

  for (let i = 2; i < sums.length; i++) {
    set.add(sums[i - 2] % k);
    if (set.has(sums[i] % k)) {
      return true;
    }
  }
  return false;
}
