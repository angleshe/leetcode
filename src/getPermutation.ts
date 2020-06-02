export function getPermutation(n: number, k: number): string {
  k--;
  const path: number[] = [];
  const factorial: number[] = [1];
  const nums: number[] = Array.from<undefined, number>(Array(n), (v, k) => k + 1);

  for (let i: number = 1; i < n; i++) {
    factorial.push(i * factorial[i - 1]);
  }

  for (let i: number = n - 1; i >= 0; i--) {
    const index: number = Math.floor(k / factorial[i]);
    path.push(nums[index]);
    nums.splice(index, 1);
    k %= factorial[i];
  }

  return path.concat(nums).join('');
}
