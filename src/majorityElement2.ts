/**
 * @description 找出整数数组所有出现超过 ⌊ n/3 ⌋ 次的元素
 * @author angle
 * @date 2021-01-08
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function majorityElement(nums: number[]): number[] {
  const res: number[] = [];
  if (nums.length) {
    let cand1 = nums[0];
    let cand2 = nums[0];
    let count1 = 0;
    let count2 = 0;
    nums.forEach((item) => {
      if (item === cand1) {
        count1++;
      } else if (item === cand2) {
        count2++;
      } else if (count1 === 0) {
        cand1 = item;
        count1 = 1;
      } else if (count2 === 0) {
        cand2 = item;
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    });
    count1 = 0;
    count2 = 0;
    nums.forEach((item) => {
      if (item === cand1) {
        count1++;
      } else if (item === cand2) {
        count2++;
      }
    });
    if (count1 > nums.length / 3) {
      res.push(cand1);
    }
    if (count2 > nums.length / 3) {
      res.push(cand2);
    }
  }
  return res;
}
