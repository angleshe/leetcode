/**
 * @description 返回1-n组成n位数从小到大排列第k个值
 * @author angle
 * @date 2020-06-02
 * @export
 * @param {number} n
 * @param {number} k
 * @returns {string} 第k个值
 */
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
