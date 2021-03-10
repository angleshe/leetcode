/**
 * @description 找到整数数组中最长严格递增子序列的长度
 * @author angle
 * @date 2021-03-10
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function lengthOfLIS(nums: number[]): number {
  return nums.reduce<number[]>((prev, curr) => {
    if (prev.length) {
      let left: number = 0;
      let right: number = prev.length - 1;
      if (curr <= prev[left]) {
        prev[left] = curr;
      } else if (curr > prev[right]) {
        prev.push(curr);
      } else if (curr < prev[right]) {
        while (right - left > 1) {
          const mid = left + Math.floor((right - left) / 2);
          if (prev[mid] > curr) {
            right = mid;
          } else if (prev[mid] < curr) {
            left = mid;
          } else {
            right = mid;
            break;
          }
        }
        prev[right] = curr;
      }
    } else {
      prev.push(curr);
    }
    return prev;
  }, []).length;
}
