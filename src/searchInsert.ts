export function searchInsert(nums: number[], target: number): number {
  if (nums.length > 0 && nums[0] < target) {
    let lIndex: number = 0;
    let rIndex: number = nums.length - 1;
    let targetIndex: number = lIndex + Math.floor((rIndex - lIndex) / 2);
    if (nums[rIndex] === target) {
      return rIndex;
    } else if (nums[rIndex] < target) {
      return rIndex + 1;
    }
    while (targetIndex !== lIndex && targetIndex !== rIndex) {
      if (nums[targetIndex] === target) {
        return targetIndex;
      } else if (nums[targetIndex] > target) {
        rIndex = targetIndex;
      } else {
        lIndex = targetIndex;
      }
      targetIndex = lIndex + Math.floor((rIndex - lIndex) / 2);
    }
    return rIndex;
  }
  return 0;
}
