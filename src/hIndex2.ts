/**
 * @description 计算出研究者的 h 指数
 * @author angle
 * @date 2021-02-10
 * @export
 * @param {number[]} citations  升序排列论文被引用次数
 * @returns {number}
 */
export function hIndex(citations: number[]): number {
  if (citations.length === 0) {
    return 0;
  }

  let left: number = 0;
  let right: number = citations.length - 1;

  if (citations[left] >= citations.length) {
    return citations.length;
  }

  if (citations[right] <= 1) {
    return citations[right];
  }

  while (right - left > 1) {
    const mid = Math.floor(left + (right - left) / 2);

    const h = citations.length - mid;

    if (citations[mid] === h) {
      return citations[mid];
    }

    if (citations[mid] > h) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return citations.length - right;
}
