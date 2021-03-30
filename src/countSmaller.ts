export function countSmaller(nums: number[]): number[] {
  const res: number[] = [];
  const arr: number[] = [];
  let target = nums.pop();
  while (target !== undefined) {
    if (arr.length) {
      let left: number = 0;
      let right: number = arr.length - 1;

      if (target <= arr[left]) {
        arr.unshift(target);
        res.unshift(0);
      } else if (target > arr[right]) {
        arr.push(target);
        res.unshift(arr.length - 1);
      } else {
        while (left < right) {
          const mid = left + Math.floor((right - left) / 2);
          if (arr[mid] >= target) {
            right = mid;
          } else {
            left = mid + 1;
          }
        }
        res.unshift(left);
        arr.splice(left, 0, target);
      }
    } else {
      arr.push(target);
      res.unshift(0);
    }
    target = nums.pop();
  }
  return res;
}
