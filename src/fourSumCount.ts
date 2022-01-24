/**
 * @description 计算有多少个元组 (i, j, k, l) 能满足nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * @author angle
 * @date 24/01/2022
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {*}  {number}
 */
export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map<number, number>();
  nums3.forEach((a) => {
    nums4.forEach((b) => {
      const sum = a + b;
      if (map.has(sum)) {
        map.set(sum, map.get(sum)! + 1);
      } else {
        map.set(sum, 1);
      }
    });
  });
  let res: number = 0;
  nums1.forEach((a) => {
    nums2.forEach((b) => {
      const sum = 0 - a - b;
      if (map.has(sum)) {
        res += map.get(sum)!;
      }
    });
  });
  return res;
}
