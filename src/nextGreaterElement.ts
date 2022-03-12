/**
 * @description 下一个更大元素
 * @author angle
 * @date 2022-03-12
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(nums2[i]);
  }

  return nums1.map((item) => map.get(item) ?? -1);
}
