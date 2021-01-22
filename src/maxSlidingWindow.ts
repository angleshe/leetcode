/**
 * @description 大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧 返回每次窗口中最大值
 * @author angle
 * @date 2021-01-22
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = [];

  const res: number[] = [];

  function push(num: number): void {
    while (queue.length && queue[queue.length - 1] < num) {
      queue.pop();
    }
    queue.push(num);
  }

  for (let i: number = 0; i < nums.length; i++) {
    if (i < k - 1) {
      push(nums[i]);
    } else {
      push(nums[i]);
      res.push(queue[0]);
      if (nums[i - k + 1] === queue[0]) {
        queue.shift();
      }
    }
  }
  return res;
}
