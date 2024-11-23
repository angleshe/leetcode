export function findLHS(nums: number[]): number {
  const map = nums.reduce<Record<number, number>>((res, num) => {
    res[num] = (res[num] ?? 0) + 1;
    return res;
  }, {});

  return nums.reduce((res, num) => {
    const target = num + 1;
    if (map[target]) {
      return Math.max(res, ++map[target]);
    }
    return res;
  }, 0);
}
