/**
 * @description 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * @author angle
 * @date 2020-06-24
 * @export
 * @param {number[]} nums 颜色序列: 数 0、 1 和 2 分别表示红色、白色和蓝色
 */
export function sortColors(nums: number[]): void {
  let n: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i - n] === 0) {
      const target: number[] = nums.splice(i - n, 1);
      nums.splice(0, 0, target[0]);
    } else if (nums[i - n] === 2) {
      const target: number[] = nums.splice(i - n, 1);
      nums.push(target[0]);
      n++;
    }
  }
}
