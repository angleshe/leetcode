/**
 * @description 找到升序排列 的有序数组中两个数使得它们相加之和等于目标数。
 * @author angle
 * @date 2020-10-17
 * @export
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left: number = 0;
  let right: number = numbers.length - 1;
  while (left !== right) {
    const sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum === target) {
      return [left + 1, right + 1];
    } else {
      right--;
    }
  }
  return [-1, -1];
}
