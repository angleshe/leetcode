/**
 * @description 找出给定目标值在数组中的开始位置和结束位置,如果数组中不存在目标值，返回 [-1, -1].
 * @author angle
 * @date 2020-01-14
 * @export
 * @param {number[]} nums 按照升序排列的整数数组
 * @param {number} target 目标值
 * @returns {number[]} 开始位置和结束位置
 */
export function searchRange(nums: number[], target: number): number[] {
  let lIndex: number = 0;
  let rIndex: number = nums.length - 1;
  let targetIndex: number = lIndex + Math.floor((rIndex - lIndex) / 2);
  let start: number = -1;
  let end: number = -1;
  if (nums[lIndex] === target) {
    start = lIndex;
  } else if (rIndex > 0 && nums[rIndex - 1] !== target && nums[rIndex] === target) {
    return [rIndex, rIndex];
  } else if (nums[rIndex] < target || nums[lIndex] > target) {
    return [-1, -1];
  } else {
    while (targetIndex !== lIndex && targetIndex !== rIndex) {
      if (nums[targetIndex] === target && targetIndex > 0 && nums[targetIndex - 1] !== target) {
        start = targetIndex;
        break;
      } else if (nums[targetIndex] >= target) {
        rIndex = targetIndex;
      } else {
        lIndex = targetIndex;
      }
      targetIndex = lIndex + Math.floor((rIndex - lIndex) / 2);
    }
  }
  if (start !== -1) {
    lIndex = start;
    rIndex = nums.length - 1;
    targetIndex = lIndex + Math.floor((rIndex - lIndex) / 2);
    if (nums[rIndex] === target) {
      end = rIndex;
    } else if (nums[lIndex + 1] !== target) {
      end = lIndex;
    } else {
      while (targetIndex !== lIndex && targetIndex !== rIndex) {
        if (nums[targetIndex] === target && nums[targetIndex + 1] !== target) {
          end = targetIndex;
          break;
        } else if (nums[targetIndex] === target) {
          lIndex = targetIndex;
        } else {
          rIndex = targetIndex;
        }
        targetIndex = lIndex + Math.floor((rIndex - lIndex) / 2);
      }
    }
  }
  return [start, end];
}
