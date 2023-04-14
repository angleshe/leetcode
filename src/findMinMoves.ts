export function findMinMoves(machines: number[]): number {
  const sum = machines.reduce((res, current) => res + current, 0);
  if (sum % machines.length) {
    return -1;
  }

  const avg = sum / machines.length;
  let ans = 0;
  let s = 0;
  for (let num of machines) {
    num -= avg;
    s += num;
    ans = Math.max(ans, Math.max(Math.abs(s), num));
  }

  return ans;
}
