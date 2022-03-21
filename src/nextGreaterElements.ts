/**
 * @description 返回nums中每个元素的 下一个更大元素
 * @author angle
 * @date 2022-03-21
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function nextGreaterElements(nums: number[]): number[] {
  const res: number[] = Array(nums.length).fill(-1);
  const stack: number[] = [];
  const len = 2 * nums.length;
  for (let i = 0; i < len; i++) {
    const index = i % nums.length;
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      const ind = stack.pop()!;
      res[ind] = nums[index];
    }
    stack.push(index);
  }
  return res;
}
