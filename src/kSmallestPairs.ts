/**
 * @description 找到和最小的 k 个数对
 * @author angle
 * @date 2021-08-26
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[][]}
 */
export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const res: number[][] = [];
  const isBig = nums1.length > nums2.length;

  if (isBig) {
    [nums1, nums2] = [nums2, nums1];
  }

  const positions = Array<number>(nums1.length).fill(0);

  for (let i: number = 0; i < k && nums1.length; i++) {
    const num1 = nums1.shift()!;
    const position = positions.shift()!;
    const num2 = nums2[position];
    res.push(isBig ? [num2, num1] : [num1, num2]);
    if (i < k - 1) {
      if (nums1.length) {
        nums1.unshift(nums1.pop()!);
        positions.unshift(positions.pop()!);
        const sum = nums1[0] + nums2[positions[0]];
        let j = 0;
        while (j < nums1.length) {
          const childLeftIndex = j * 2 + 1;
          const childRightIndex = childLeftIndex + 1;
          if (childLeftIndex >= nums1.length) {
            break;
          }
          const childLeftSum = nums1[childLeftIndex] + nums2[positions[childLeftIndex]];
          const childRightSum =
            childRightIndex < nums1.length
              ? nums1[childRightIndex] + nums2[positions[childRightIndex]]
              : Infinity;
          if (childLeftSum <= childRightSum && sum > childLeftSum) {
            [nums1[childLeftIndex], nums1[j]] = [nums1[j], nums1[childLeftIndex]];
            [positions[childLeftIndex], positions[j]] = [positions[j], positions[childLeftIndex]];
            j = childLeftIndex;
          } else if (childLeftSum > childRightSum && sum > childRightSum) {
            [nums1[childRightIndex], nums1[j]] = [nums1[j], nums1[childRightIndex]];
            [positions[childRightIndex], positions[j]] = [positions[j], positions[childRightIndex]];
            j = childRightIndex;
          } else {
            break;
          }
        }
      }
      if (position < nums2.length - 1) {
        nums1.push(num1);
        positions.push(position + 1);
        const sum = num1 + nums2[position + 1];
        let j = nums1.length - 1;
        while (j) {
          const parentIndex = Math.ceil(j / 2) - 1;
          const parentSum = nums1[parentIndex] + nums2[positions[parentIndex]];
          if (parentSum > sum) {
            [nums1[parentIndex], nums1[j]] = [nums1[j], nums1[parentIndex]];
            [positions[parentIndex], positions[j]] = [positions[j], positions[parentIndex]];
            j = parentIndex;
          } else {
            break;
          }
        }
      }
    }
  }

  return res;
}
