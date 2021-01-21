/**
 * @description 返回输出数组 output 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * @author angle
 * @date 2021-01-21
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [];
  let k: number = 1;
  for (let i: number = 0; i < nums.length; i++) {
    res.push(k);
    k *= nums[i];
  }
  k = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    res[i] *= k;
    k *= nums[i];
  }
  return res;
}
